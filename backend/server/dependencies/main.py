from typing import Annotated, Any
from config import SECRET_KEY, ALGORITHM
import jwt
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from pydantic import BaseModel
from config import URL_AUTH

oauth2_scheme = OAuth2PasswordBearer(tokenUrl=URL_AUTH)


async def verify_token(token: Annotated[str, Depends(oauth2_scheme)]):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        # chat_id: int = payload.get("sub")
        return payload

    except InvalidTokenError:
        raise HTTPException(detail='Token is invalid', status_code=401)


async def get_current_user_chat_id(payload: Annotated[dict, Depends(verify_token)]):
    chat_id = payload.get("sub")
    return chat_id


VerifyToken = Depends(verify_token)
CurrentUserChatId = Depends(get_current_user_chat_id)
