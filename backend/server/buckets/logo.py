from api.storage import session


class Logo:
    bucket_name = 'logos2'
    storage_session = session

    def __init__(self, id, file):
        self.file = file
        self.file_format = file.filename.split('.')[1]
        # self.filename = f'{chat_id}.{self.file_format}'
        self.filename = f'{id}'
        self.filepath = f'./files/{self.filename}'

    # def load_local(self):
    #     with open(self.filepath, 'wb') as f:
    #         content = self.file.file.read()
    #         f.write(content)
    #         f.close()

    # async def load_to_storage(self):
    #     # response = self.storage_session.upload_file(f'{self.filepath}', self.bucket_name, self.filename)
    #     response = self.load_to_storage2()
    #     return response
    # @celery.task
    # async def load_to_storage(self):
    #     file_content = await self.file.read()
    #     response = self.storage_session.put_object(Bucket=self.bucket_name, Key=self.filename, Body=file_content)
    #     return response

    @classmethod
    def get(cls, id):
        try:
            response = cls.storage_session.get_object(Bucket=cls.bucket_name, Key=str(id))
            file_content = response['Body'].read()
            return file_content
        except:
            return None

    @classmethod
    def all(cls):
        response = cls.storage_session.list_objects(Bucket=cls.bucket_name)
        if 'Contents' in response:
            return response['Contents']

    @classmethod
    def all_keys(cls):
        response = cls.storage_session.list_objects(Bucket=cls.bucket_name)
        if 'Contents' in response:
            return set(map(lambda x: x['Key'], response['Contents']))

    @classmethod
    def delete(cls, id):
        obj = [{'Key': str(id)}]
        response = cls.storage_session.delete_objects(Bucket=cls.bucket_name, Delete={'Objects': obj})
        return response
