from pydantic import BaseModel


class CreateTeam(BaseModel):
    name: str
    description: str
    exp: int
    users: list[int]
    capitan: int
    hunt: bool
    roles_hunt: list

