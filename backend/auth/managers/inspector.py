from passlib.context import CryptContext
from api.database import DB
from managers.base import Manager
from datetime import datetime, timedelta, timezone
from config import TOKEN_EXPIRE_MINUTES, SECRET_KEY, ALGORITHM
import jwt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class Inspector:
    collection = DB.get_collection('auth')

    def __init__(self, id: int, login, password):
        self._id = id
        self.login = login
        self.password = self.hash_password(password)

    async def registration(self):
        try:
            await self.collection.insert_one(self.__dict__)
            return 1
        except:
            return 0

    @classmethod
    async def authenticate(cls, login, password, chat_id):
        user = await cls.collection.find_one({'_id': chat_id})
        if not user:
            return 404, 'User with chat_id not found'

        if not Inspector.verify_login(login=login, login_db=user['login']):
            return 400, 'Incorrect login'

        if not Inspector.verify_password(plain_password=password, hashed_password=user['password']):
            return 400, 'Incorrect password'
        return 200, 'Ok'
        # user = get_user(fake_db, username)
        # if not user:
        #     return False
        # if not verify_password(password, user.hashed_password):
        #     return False
        # return user

    @staticmethod
    def hash_password(password):
        return pwd_context.hash(password)

    @staticmethod
    def verify_password(plain_password, hashed_password):
        return pwd_context.verify(plain_password, hashed_password)

    @staticmethod
    def verify_login(login, login_db):
        return login == login_db

    @staticmethod
    def create_access_token(chat_id: int):
        to_encode = {'sub': chat_id}
        expire = datetime.now(timezone.utc) + timedelta(minutes=int(TOKEN_EXPIRE_MINUTES))
        to_encode.update({"exp": expire})

        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt
