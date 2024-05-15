from pydantic import BaseModel


class UserCreate(BaseModel):
    chat_id: int
    first_name: str
    second_name: str
    stack: list
    roles: list
    about: str
    exp_work: str
    hackathons: list[dict]
    GitHub: str
    link_tg: str
    exp: int
    who_is: bool


class UserUpdate(BaseModel):
    first_name: str
    second_name: str
    stack: list
    roles: list
    about: str
    exp_work: str
    hackathons: dict
    GitHub: str
    link_tg: str
    exp: int
    who_is: bool

class UserResponse(BaseModel):
    chat_id: int
    first_name: str
    second_name: str
    stack: list
    roles: list
    about: str
    exp_work: str
    hackathons: list[dict]
    GitHub: str
    link_tg: str
    exp: int
    who_is: bool