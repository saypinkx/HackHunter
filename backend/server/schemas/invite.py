from pydantic import BaseModel


class InviteCreate(BaseModel):
    from_id: int
    to_id: int
    team_id: str
    status: str = "new"

class InviteUpdate(BaseModel):
    from_id: int
    to_id: int
    team_id: str
    status: str



class InviteResponse(BaseModel):
    from_id: int
    to_id: int
    team_id: str
    status: str
