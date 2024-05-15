from api.database import DB


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

    @classmethod
    async def all(cls, **parameters):
        query = dict()
        for key in parameters:
            if parameters[key] is not None:
                query[key] = parameters[key]

        users_dicts = cls.users.find(query)
        users = []
        async for user_dict in users_dicts:
            users.append(cls(parameters=user_dict))
        return users

    async def add(self):
        await self.users.insert_one(self.__dict__)
        print()

    async def update(self, parameters: dict):
        self.__dict__.update(parameters)
        await self.users.update_one({'_id': self._id}, {'$set': self.__dict__})

    async def delete(self):
        await self.users.delete_one({'_id': self._id})

    async def response(self):
        id = self._id
        user_response = self.__dict__.copy()
        del user_response['_id']
        user_response['chat_id'] = id
        return user_response
    @classmethod
    async def all_response(cls, users: list):
        users_response = []
        for user in users:
            user_response = await user.response()
            users_response.append(user_response)
        return users_response

