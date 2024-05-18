from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status, Response
from typing import Annotated

from managers.user import User
from schemas.user import UserCreate, UserUpdate
from fastapi import File, UploadFile
from fastapi.responses import FileResponse
from buckets.logo import Logo
from managers.team import Team
from api.worker import load_to_storage

logo_router = APIRouter(prefix='/api/files/logos')


@logo_router.get('/{id}', status_code=200)
def get_logo(id: Annotated[str, Path()]):
    file_content = Logo.get(id)
    if not file_content:
        raise HTTPException(detail='logo with id not found', status_code=404)
    response = Response(content=file_content)
    response.headers["Content-Disposition"] = "attachment; filename=logo.jpg"
    return response


@logo_router.put("/{id}", status_code=200)
async def update_logo(id: Annotated[str, Path()], file: UploadFile):
    team = await Team.get(id)
    if not team:
        raise HTTPException(status_code=404, detail='Team with id not found')
    logo = Logo(id, file)
    file_content = await logo.file.read()
    load_to_storage.delay(file_content=file_content, filename=logo.filename, bucket_name=logo.bucket_name)
    # if response['ResponseMetadata']['HTTPStatusCode'] != 200:
    #     raise HTTPException(status_code=500, detail='Storage error')
    return "Successfully update logo"


@logo_router.delete("/{id}")
async def delete_avatar(id: Annotated[str, Path()]):
    logos = Logo.all_keys()
    if not logos or str(id) not in logos:
        raise HTTPException(status_code=404, detail='avatar with chat_id not found')
    response = Logo.delete(id)
    if response['ResponseMetadata']['HTTPStatusCode'] != 200:
        raise HTTPException(status_code=500, detail='Storage error')
    return 'Successfully delete avatar'
