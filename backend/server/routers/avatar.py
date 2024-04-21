from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status, Response
from typing import Annotated
from managers.user import User
from schemas.user import UserCreate, UserUpdate
from fastapi import File, UploadFile
from fastapi.responses import FileResponse
from buckets.avatar import Avatar
from managers.user import User

avatar_router = APIRouter(prefix='/api/files/avatars')


@avatar_router.get('/{chat_id}', status_code=200)
def get_avatar(chat_id: Annotated[int, Path()]):
    file_content = Avatar.get(chat_id)
    if not file_content:
        raise HTTPException(detail='avatar with chat_id  not found', status_code=404)
    response = Response(content=file_content)
    response.headers["Content-Disposition"] = "attachment; filename=avatar.jpg"
    return response


@avatar_router.put("/{chat_id}", status_code=200)
async def update_avatar(chat_id: Annotated[int, Path()], file: UploadFile):
    user = await User.get(chat_id)
    if not user:
        raise HTTPException(status_code=404, detail='User with chat_id not found')
    avatar = Avatar(chat_id, file)
    response = await avatar.load_to_storage()
    if response['ResponseMetadata']['HTTPStatusCode'] != 200:
        raise HTTPException(status_code=500, detail='Storage error')
    return "Successfully update avatar"

@avatar_router.delete("/{chat_id}")
async def delete_avatar(chat_id: Annotated[int, Path()]):
    avatars = Avatar.all_keys()
    if not avatars or str(chat_id) not in avatars:
        raise HTTPException(status_code=404, detail='avatar with chat_id not found')
    response = Avatar.delete(chat_id)
    if response['ResponseMetadata']['HTTPStatusCode'] != 200:
        raise HTTPException(status_code=500, detail='Storage error')
    return 'Successfully delete avatar'

@avatar_router.delete("2/{chat_id}")
async def delete_avatar(chat_id: Annotated[int, Path()]):
    avatars = Avatar.all_keys()
    if not avatars or str(chat_id) not in avatars:
        raise HTTPException(status_code=404, detail='avatar with chat_id not found')
    response = Avatar.delete(chat_id)
    if response['ResponseMetadata']['HTTPStatusCode'] != 200:
        raise HTTPException(status_code=500, detail='Storage error')
    return 'Successfully delete avatar'


