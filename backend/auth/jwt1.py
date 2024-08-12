from jose import jwt
from datetime import datetime, timedelta, timezone
from config import SECRET_KEY, TOKEN_EXPIRE_MINUTES, ALGORITHM


class Token:
    def __init__(self, SECRET_KEY, ALGORITHM, TOKEN_EXPIRE_MINUTES):
        self.SECRET_KEY = SECRET_KEY
        self.ALGORITHM = ALGORITHM
        self.TOKEN_EXPIRE_MINUTES = int(TOKEN_EXPIRE_MINUTES)

    def create_access_token(self, data: dict):
        to_encode = data.copy()
        expire = timedelta(minutes=self.TOKEN_EXPIRE_MINUTES)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt
