import time

from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated
from managers.team import Team
from schemas.team import TeamCreate, TeamUpdate, TeamResponse
from functools import wraps
from fastapi import Request
from api.cache_storage_v2 import cache

router = APIRouter(prefix='/api/teams')


@router.get('/{id}', status_code=200, response_model=TeamResponse)
async def get_team(id: Annotated[str, Path()]):
    team = await Team.get(id)
    if not team:
        raise HTTPException(status_code=404, detail='Team with id not found')
    return await team.response()


@router.post('', status_code=201)
@cache(invalidate="get_all_teams")
async def create_team(schema: Annotated[TeamCreate, Body()]):
    parameters = schema.dict()
    try:
        team = Team(parameters=parameters)
        await team.add()
    except:
        raise HTTPException(status_code=400, detail='Team with id already registered')
    else:
        return 'OK'


@router.get('', status_code=200, response_model=list[TeamResponse])
@cache
async def get_all_teams(hunt: Annotated[bool, Query()] = None):
    teams = await Team.all(hunt=hunt)
    return await Team.all_response(teams)


@router.put('/{id}', status_code=200)
@cache(invalidate="get_all_teams")
async def update_team(id: Annotated[str, Path()], schema: Annotated[TeamUpdate, Body()]):
    team = await Team.get(id)
    parameters = schema.dict()
    if not team:
        raise HTTPException(status_code=404, detail='Team with id not found')
    await team.update(parameters=parameters)
    return 'OK'


@router.delete('/{id}', status_code=200)
@cache(invalidate="get_all_teams")
async def delete_team(id: Annotated[str, Path()]):
    team = await Team.get(id)
    if not team:
        raise HTTPException(status_code=404, detail='Team with id not found')
    await team.delete()
    return 'OK'
