from managers.base import Manager
from api.database import DB


class Invite(Manager):
    collection = DB.get_collection('invites')

    def __init__(self, parameters: dict):
        parameters['id'] = str(parameters['from_id']) + str(parameters['to_id']) + parameters['team_id']
        super().__init__(parameters)

    @staticmethod
    async def generate_id(parameters: dict):
        result = str(parameters['from_id']) + str(parameters['to_id']) + parameters['team_id']
        return result

    @classmethod
    async def get_all(cls, **parameters):
        return await super().all(**parameters)
