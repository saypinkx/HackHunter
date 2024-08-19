from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware
from routers.user import user_router
from routers.avatar import avatar_router
from routers.team import router as team_router
from routers.logo import logo_router
from routers.hack import router as hack_router
from fastapi import FastAPI, Request, Response
import time
from fastapi import Depends, FastAPI, Header, HTTPException
from typing_extensions import Annotated
from functools import wraps
from redis import asyncio as aioredis
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_cache.decorator import cache
from config import REDIS_NAME, REDIS_PORT, REDIS_HOST
from routers.invite import router as invite_router
from dependencies.main import VerifyToken, CurrentUserChatId
app = FastAPI(dependencies=[VerifyToken, CurrentUserChatId])
app.include_router(user_router)
app.include_router(invite_router)
app.include_router(avatar_router)
app.include_router(team_router)
app.include_router(logo_router)
app.include_router(hack_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response


if __name__ == "__main__":
    uvicorn.run('main:app', host="127.0.0.1", port=2000)
@app.on_event('startup')
async def startup_event():
    redis = aioredis.from_url(F"{REDIS_NAME}://{REDIS_HOST}:{REDIS_PORT}", encoding='utf8', decode_responses=True)
    FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")