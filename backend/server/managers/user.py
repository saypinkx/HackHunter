from database import DB
from schemas.user import UserCreate


class User:
    users = DB.get_collection('users')

    def __init__(self, parameters: dict):
        if parameters:
            for key in parameters:
                if key != 'chat_id':
                    self.__dict__[key] = parameters[key]
                else:
                    self._id = parameters[key]

    def __setattr__(self, key, value):
        if key == '_id':
            if type(value) is not int:
                raise ValueError('The chat_id parameter must be an integer')
        super().__setattr__(key, value)

    @classmethod
    async def get(cls, chat_id: int):
        user_dict = await cls.users.find_one({'_id': chat_id})

        if not user_dict:
            return None
        return cls(parameters=user_dict)

    async def add(self):
        await self.users.insert_one(self.__dict__)
        print()

    async def update(self, parameters: dict):
        self.__dict__.update(parameters)
        await self.users.update_one({'_id': self._id}, {'$set': self.__dict__})

    async def delete(self):
        await self.users.delete_one({'_id': self._id})
