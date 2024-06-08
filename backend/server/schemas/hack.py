from pydantic import BaseModel


class HackCreate(BaseModel):
    id: str
    name: str
    text: str
    tags: list[str]
    image_link: str
    registration_link: str
    end: bool



class HackUpdate(BaseModel):
    name: str
    text: str
    tags: list[str]
    image_link: str
    registration_link: str
    end: bool



class HackResponse(BaseModel):
    id: str
    name: str
    text: str
    tags: list[str]
    image_link: str
    registration_link: str
    end: bool
