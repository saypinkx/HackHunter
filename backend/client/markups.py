from aiogram import types
from aiogram.types.web_app_info import WebAppInfo
from urls import url_hunt, url_whois, url_profile, url_hackathons


def start_markup():
    keyboard = types.InlineKeyboardMarkup()
    handler_button0 = types.InlineKeyboardButton(text='👤Мой профиль', web_app=WebAppInfo(url=url_profile))
    handler_button1 = types.InlineKeyboardButton(text='❓whois', web_app=WebAppInfo(url=url_whois))
    handler_button2 = types.InlineKeyboardButton(text='❗hunt', web_app=WebAppInfo(url=url_hunt))
    handler_button3 = types.InlineKeyboardButton(text='👨🏻‍💻Hackathons', web_app=WebAppInfo(url=url_hackathons))
    handler_button4 = types.InlineKeyboardButton(text='⚙️Главная', callback_data='start')
    keyboard.row(handler_button0, handler_button1)
    keyboard.row(handler_button2, handler_button3)
    keyboard.row(handler_button4)
    return keyboard
