from pydantic import BaseModel

class UserRegister(BaseModel):
    login: str
    password: str
    chat_id: int
    
class UserLogin(BaseModel):
    login: str
    password: str
    chat_id: int
