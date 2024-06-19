from api.database import DB


class Manager:
    collection = DB.get_collection('collection_name')

    def __init__(self, parameters: dict):
        if parameters:
            for key in parameters:
                if key != 'id':
                    self.__dict__[key] = parameters[key]
                else:
                    self._id = parameters[key]

    # def __setattr__(self, key, value):
    #     if key == '_id':
    #         if type(value) is not str:
    #             raise ValueError('The id parameter must be an str')
    #     super().__setattr__(key, value)

    @classmethod
    async def get(cls, id: str):
        node = await cls.collection.find_one({'_id': id})

        if not node:
            return None
        return cls(parameters=node)

    @classmethod
    async def all(cls, **parameters):
        query = dict()
        for key in parameters:
            if parameters[key] is not None:
                query[key] = parameters[key]

        nodes = cls.collection.find(query)
        result = []
        async for node in nodes:
            node = cls(parameters=node)
            result.append(node)
        return result

    @classmethod
    async def all_response(cls, nodes: list):
        result = []
        for node in nodes:
            node = await node.response()
            result.append(node)
        return result

    async def add(self):
        await self.collection.insert_one(self.__dict__)
        print()

    async def update(self, parameters: dict):
        self.__dict__.update(parameters)
        await self.collection.update_one({'_id': self._id}, {'$set': self.__dict__})

    async def delete(self):
        await self.collection.delete_one({'_id': self._id})

    async def response(self):
        id = self._id
        node_response = self.__dict__.copy()
        del node_response['_id']
        node_response['id'] = id
        return node_response