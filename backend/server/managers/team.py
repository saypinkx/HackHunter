from api.database import DB


class Team:
    teams = DB.get_collection('teams')

    def __init__(self, parameters: dict):
        if parameters:
            for key in parameters:
                if key != 'link_tag':
                    self.__dict__[key] = parameters[key]
                else:
                    self._id = parameters[key]

    def __setattr__(self, key, value):
        if key == '_id':
            if type(value) is not str:
                raise ValueError('The link_tag parameter must be an str')
        super().__setattr__(key, value)

    @classmethod
    async def get(cls, link_tag: str):
        team_dict = await cls.teams.find_one({'_id': link_tag})

        if not team_dict:
            return None
        return cls(parameters=team_dict)

    @classmethod
    async def all(cls, **parameters):
        query = dict()
        for key in parameters:
            if parameters[key] is not None:
                query[key] = parameters[key]

        team_dicts = cls.teams.find(query)
        teams = []
        async for team_dict in team_dicts:
            teams.append(cls(parameters=team_dict))
        return teams

    async def add(self):
        await self.teams.insert_one(self.__dict__)
        print()

    async def update(self, parameters: dict):
        self.__dict__.update(parameters)
        await self.teams.update_one({'_id': self._id}, {'$set': self.__dict__})

    async def delete(self):
        await self.teams.delete_one({'_id': self._id})