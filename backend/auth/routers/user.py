import time

from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated
from managers.user import User
from schemas.user import UserRegister, UserLogin
from managers.inspector import Inspector

user_router = APIRouter(prefix='/api/users')


@user_router.post('/register', status_code=201)
async def registration(schema: Annotated[UserRegister, Body()]):
    user = Inspector(login=schema.login, password=schema.password, id=schema.chat_id)
    if not await user.registration():
        raise HTTPException(status_code=400, detail='User with chat_id already registered')
    return 'Ok'


@user_router.post('/token', status_code=200)
async def get_token(schema: Annotated[UserLogin, Body()]):
    result = await Inspector.authenticate(login=schema.login, password=schema.password, chat_id=schema.chat_id)
    if result[1] != 'Ok':
        raise HTTPException(detail=result[1], status_code=result[0])
    return Inspector.create_access_token(chat_id=schema.chat_id)
