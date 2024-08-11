import aiohttp
from bs4 import BeautifulSoup
import time
from selenium import webdriver
from config import HOST, PORT
import asyncio

#Асинхронная версия selenium - Playwright:
class Extractor:
    def __init__(self, driver):
        self.driver = driver

    def get_links(self, url):
        driver = self.driver
        driver.get(url)
        driver.implicitly_wait(2)
        driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
        time.sleep(3)
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        soup = soup.find_all('div', class_='t-feed')
        new, old = soup[0], soup[1]
        items_new = new.find_all('a', class_='t-feed__link')
        items_old = old.find_all('a', class_='t-feed__link')
        new_links = []
        for item in items_new:
            link = item.get('href')
            if 'http' not in link:
                link = url + link
            new_links.append(link)
        old_links = []
        for item in items_old:
            link = item.get('href')
            if 'http' not in link:
                link = url + link
            old_links.append(link)
        return new_links, old_links

    def get_info_about_hack(self, url):
        driver = self.driver
        driver.get(url)
        driver.implicitly_wait(2)
        driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
        time.sleep(3)
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        soup = soup.find('div', class_='t-feed__post-popup__content-wrapper')
        text = soup.find('div', class_='t-redactor__text')
        name = soup.find('h1', class_='t-feed__post-popup__title').text
        image_link = soup.find('img', class_='t-feed__post-popup__img').get('src')
        tags_html = soup.find_all('span', class_='t-uptitle')
        tags = set()
        for tag in tags_html:
            tags.add(tag.text)
        links = soup.find_all('div', 't-redactor__embedcode')
        registration_link = ''
        for link in links:
            if 'Зарегистрироваться' in link.text:
                registration_link = link.find('a').get('href')

        return text, name, tags, image_link, registration_link


class Manager:

    async def get_hackathons(self, session, url):
        async with session.get(url) as response:
            result = await response.json()
            hackathons = dict()
            for node in result:
                hackathons[node['id']] = node['end']
            return hackathons

    async def push_hackathon(self, session, url, data, headers):
        async with session.post(url, json=data, headers=headers) as response:
            result = await response.json()
            return result, response.status

options = webdriver.ChromeOptions()
remote_address = f"{HOST}:4444"
driver = webdriver.Remote(remote_address, options=options)
extractor = Extractor(driver=driver)
manager = Manager()
url = f'http://{HOST}:{PORT}/api/hackathons'
url_extractor='https://www.хакатоны.рус'


async def script(extractor=extractor, manager=manager, url=url, url_extractor=url_extractor):
    await asyncio.sleep(5)
    async with aiohttp.ClientSession() as session:
        while True:
            new_links, old_links = extractor.get_links(url=url_extractor)
            hackathons = await manager.get_hackathons(session=session, url=url)
            for link in new_links:
                if link not in hackathons:
                    try:
                        text, name, tags, image_link, registration_link = extractor.get_info_about_hack(url=link)
                        data = {'id': link, 'text': str(text), 'tags': list(tags), 'image_link': image_link,
                            'name': name, 'registration_link': registration_link, 'end': False}
                        detail, status = await manager.push_hackathon(session=session, url=url, data=data, headers={'Content-Type': 'application/json'})
                        if status == 201:
                            print(f'Add new hackathon - {link}')

                    except:
                        print(f'Can not add new hackathon - {link}')
            for link in old_links:
                if link not in hackathons:
                    try:
                        text, name, tags, image_link, registration_link = extractor.get_info_about_hack(url=link)
                        data = {'id': link, 'text': str(text), 'tags': list(tags), 'image_link': image_link,
                        'name': name, 'registration_link': registration_link, 'end': True}
                        detail, status = await manager.push_hackathon(session=session, url=url, data=data,
                                                              headers={'Content-Type': 'application/json'})
                        if status == 201:
                            print(f'Add old hackathon - {link}')
                    except:
                        print(f'Can not add old hackathon - {link}')

            await asyncio.sleep(300)




if __name__ == "__main__":
    asyncio.run(script())