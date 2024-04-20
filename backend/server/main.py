from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware
from routers.user import user_router
from routers.avatar import avatar_router
from fastapi import FastAPI, Request


app = FastAPI()
app.include_router(user_router)
app.include_router(avatar_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
if __name__ == "__main__":
    uvicorn.run('main:app', host="127.0.0.1", port=8000)
