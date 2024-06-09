from schemas.hack import HackCreate as SchemaCreate, HackUpdate as SchemaUpdate, HackResponse as SchemaResponse
from managers.hack import Hack as Manager
from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated

from api.cache_storage_v2 import cache

router = APIRouter(prefix='/api/hackathons')


@router.get('/{id}', status_code=200, response_model=SchemaResponse)
async def get_hackathon(id: Annotated[str, Path()]):
    node = await Manager.get(id)
    if not node:
        raise HTTPException(status_code=404, detail='Hackathon with id not found')
    return await node.response()


@router.post('', status_code=201)
@cache(invalidate="get_all_hackathons")
async def create_hackathon(schema: Annotated[SchemaCreate, Body()]):
    parameters = schema.dict()
    try:
        node = Manager(parameters=parameters)
        await node.add()
    except:
        raise HTTPException(status_code=400, detail='Hackathon with id already registered')
    else:
        return 'OK'


@router.get('', status_code=200, response_model=list[SchemaResponse])
@cache(expire=30)
async def get_all_hackathons(end: Annotated[bool, Query()] = None):
    nodes = await Manager.all(end=end)
    return await Manager.all_response(nodes)


@router.delete('/{id}', status_code=200)
@cache(invalidate="get_all_hackathons")
async def delete_hackathon(id: Annotated[str, Path()]):
    node = await Manager.get(id)
    if not node:
        raise HTTPException(status_code=404, detail='Hackathon with id not found')
    await node.delete()
    return 'OK'


@router.put('/{id}', status_code=200)
@cache(invalidate="get_all_hackathons")
async def update_hackathon(id: Annotated[str, Path()], schema: Annotated[SchemaUpdate, Body()]):
    node = await Manager.get(id)
    parameters = schema.dict()
    if not node:
        raise HTTPException(status_code=404, detail='Hackathon with id not found')
    await node.update(parameters=parameters)
    return 'OK'
