import time

from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated
from managers.team import Team
from schemas.team import TeamCreate, TeamUpdate, TeamResponse
from functools import wraps
from fastapi import Request
from api.cache_storage_v2 import cache

router = APIRouter(prefix='/api/teams')






@router.get('/{link_tag}', status_code=200)
async def get_team(link_tag: Annotated[str, Path()]):
    team = await Team.get(link_tag)
    if not team:
        raise HTTPException(status_code=404, detail='Team with link_tag not found')
    return team


@router.post('', status_code=201)
@cache(invalidate="get_all_teams")
async def create_team(schema: Annotated[TeamCreate, Body()]):
    parameters = schema.dict()
    try:
        team = Team(parameters=parameters)
        await team.add()
    except:
        raise HTTPException(status_code=400, detail='Team with link_tag already registered')
    else:
        return 'OK'


@router.get('', status_code=200)
@cache(expire=30)
async def get_all_teams(hunt: Annotated[bool, Query()] = None):
    teams = await Team.all(hunt=hunt)
    return teams


@router.put('/{link_tag}', status_code=200)
@cache(invalidate="get_all_teams")
async def update_team(link_tag: Annotated[str, Path()], schema: Annotated[TeamUpdate, Body()]):
    team = await Team.get(link_tag)
    parameters = schema.dict()
    if not team:
        raise HTTPException(status_code=404, detail='Team with link_tag not found')
    await team.update(parameters=parameters)
    return 'OK'


@router.delete('/{link_tag}', status_code=200)
@cache(invalidate="get_all_teams")
async def delete_team(link_tag: Annotated[str, Path()]):
    team = await Team.get(link_tag)
    if not team:
        raise HTTPException(status_code=404, detail='Team with link_tag not found')
    await team.delete()
    return 'OK'
