from pydantic import BaseModel


class TeamCreate(BaseModel):
    name: str
    description: str
    link_tag: str
    exp: int
    users_chat_id: list[int]
    capitan_chat_id: int
    hunt: bool
    roles_hunt: list
    description_hunt: str

class TeamUpdate(BaseModel):
    name: str
    description: str
    link_tag: str
    exp: int
    users_chat_id: list[int]
    capitan_chat_id: int
    hunt: bool
    roles_hunt: list
    description_hunt: str

class TeamResponse(BaseModel):
    id: str
    name: str
    description: str
    exp: int
    users_chat_id: list[int]
    capitan_chat_id: int
    hunt: bool
    roles_hunt: list
    description_hunt: str
