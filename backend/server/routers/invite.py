from schemas.invite import InviteCreate as SchemaCreate, InviteUpdate as SchemaUpdate, InviteResponse as SchemaResponse
from managers.invite import Invite as Manager
from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated
from managers.team import Team
from managers.user import User
from api.cache_storage_v2 import cache

router = APIRouter(prefix='/api/invites')


@router.get('/received/{to_id}', status_code=200, response_model=list[SchemaResponse])
async def get_received_invites(to_id: Annotated[int, Path()]):
    nodes = await Manager.get_all(to_id=to_id)
    return await Manager.all_response(nodes)


@router.get('/sent/{from_id}', status_code=200, response_model=list[SchemaResponse])
async def get_sent_invites(from_id: Annotated[int, Path()]):
    nodes = await Manager.get_all(from_id=from_id)
    return await Manager.all_response(nodes)


@router.post('', status_code=201)
async def create_invite(schema: Annotated[SchemaCreate, Body()]):
    parameters = schema.dict()
    to_user, from_user, team = await User.get(schema.to_id), await User.get(schema.from_id), await Team.get(schema.team_id)
    if to_user is None or from_user is None:
        raise HTTPException(status_code=404,
                            detail=f'User with id={schema.to_id if to_user is None else schema.from_id} not found')
    if team is None:
        raise HTTPException(status_code=404, detail='Team with id not found')

    try:
        node = Manager(parameters=parameters)
        await node.add()
    except:
        raise HTTPException(status_code=400, detail='Invite with data already registered')
    else:
        return 'OK'


@router.put('/', status_code=200)
async def update_invite(schema: Annotated[SchemaUpdate, Body()]):
    parameters = schema.dict()
    if schema.status not in ['accept', 'reject']:
        raise HTTPException(status_code=400, detail='Field status must have value "accept" or "reject"')
    id_node = await Manager.generate_id(parameters)
    node = await Manager.get(id_node)
    if not node:
        raise HTTPException(status_code=404, detail='Invite with data not found')
    await node.update(parameters=parameters)
    if schema.status == "accept":
        await Team.add_user_in_team(team_id=schema.team_id, user_chat_id=schema.to_id)
    return 'OK'
