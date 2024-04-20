import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from config import TOKEN_BOT
from aiogram.types.web_app_info import WebAppInfo
from aiogram.dispatcher.filters import Text, Command
from aiogram.contrib.middlewares.logging import LoggingMiddleware
import markups
from responses import response
print(TOKEN_BOT)
# types.ContentType.AUDIO
# from aiogram.utils.exceptions
# Включаем логирование, чтобы не пропустить важные сообщения
logging.basicConfig(level=logging.INFO)
# Объект бота
bot = Bot(token=TOKEN_BOT)
# Диспетчер
dp = Dispatcher(bot=bot)
dp.middleware.setup(LoggingMiddleware())


# @dp.message_handler(Text(equals='s'))
# @dp.message_handler(content_types=[types.ContentType.AUDIO])
# @dp.message_handler(commands=)
@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    await message.answer(text=response['start'], reply_markup=markups.start_markup())


@dp.callback_query_handler(text='start')
async def start(callback: types.CallbackQuery):
    chat_id = callback.message.chat.id
    last_message = callback.message.message_id
    await bot.delete_message(chat_id=chat_id, message_id=last_message)
    await callback.message.answer(text=response['start'], reply_markup=markups.start_markup())


# @dp.callback_query_handler(text='club')
# async def get_info_club(callback: types.CallbackQuery):
#     chat_id = callback.message.chat.id
#     last_message = callback.message.message_id
#     await bot.delete_message(chat_id=chat_id, message_id=last_message)
#     await callback.message.answer(text=response['club'], reply_markup=markups.club_markup())

#
# @dp.message_handler(content_types=['web_app_data'])
# async def start(message: types.Message):
#     await message.answer(text='hello', reply_markup=markups.start_markup())


async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
