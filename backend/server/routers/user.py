from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated
from managers.user import User
from schemas.user import UserCreate, UserUpdate

user_router = APIRouter(prefix='/api/users')


@user_router.get('/{chat_id}', status_code=200)
async def get_user(chat_id: Annotated[int, Path()]):
    user = await User.get(chat_id)
    if not user:
        raise HTTPException(status_code=404, detail='User with chat_id not found')
    return user


@user_router.post('', status_code=201)
async def create_user(schema: Annotated[UserCreate, Body()]):
    parameters = schema.dict()
    try:
        user = User(parameters=parameters)
        await user.add()
    except:
        raise HTTPException(status_code=400, detail='User with chat_id already registered')
    else:
        return 'OK'


@user_router.put('/{chat_id}', status_code=200)
async def update_user(chat_id: Annotated[int, Path()], schema: Annotated[UserUpdate, Body()]):
    user = await User.get(chat_id)
    parameters = schema.dict()
    if not user:
        raise HTTPException(status_code=404, detail='User with chat_id not found')
    await user.update(parameters=parameters)
    return 'OK'


@user_router.delete('/{chat_id}', status_code=200)
async def delete_user(chat_id: Annotated[int, Path()]):
    user = await User.get(chat_id)
    if not user:
        raise HTTPException(status_code=404, detail='User with chat_id not found')
    await user.delete()
    return 'OK'
