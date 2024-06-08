import time
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
import requests
from config import HOST, PORT
# from pyvirtualdisplay import Display
# display = Display(visible=False, size=(800, 800))
# display.start()

def get_links(url, driver):
    url = url
    links = []
    # options = webdriver.ChromeOptions()
    # options = webdriver.ChromeOptions()

    # options.add_argument('--no-sandbox')
    # options.add_argument('--headless')
    # driver = webdriver.Chrome(options=options)
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


def get_info_about_hack(url, driver):
    # options.add_argument('--headless')
    driver.get(url)
    driver.implicitly_wait(2)
    driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
    # element = driver.find_element(By.CLASS_NAME, "t-feed__post-popup__relevants-title-wrapper")
    #
    # driver.execute_script("arguments[0].scrollIntoView();", element)
    time.sleep(3)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    # phrase = soup.find(string='Участвуй также')
    # trim_soup = soup.find('body').find()
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


def extract(HOST, PORT, driver):
    while True:
        new_links, old_links = get_links(url='https://www.хакатоны.рус', driver=driver)
        # server_hackathons = requests.get(f'http://{my_ip}:2000/hackathons')

        response = requests.get(f'http://{HOST}:{PORT}/api/hackathons')

        hackathons = response.json()
        hackathons_db = dict()
        for hack in hackathons:
            hackathons_db[hack['id']] = hack['end']

        for link in new_links:
            if link not in hackathons_db:
                try:
                    text, name, tags, image_link, registration_link = get_info_about_hack(link, driver=driver)
                    data = {'id': link, 'text': str(text), 'tags': list(tags), 'image_link': image_link,
                            'name': name, 'registration_link': registration_link, 'end': False}
                    response = requests.post(f'http://{HOST}:{PORT}/api/hackathons', json=data,
                                             headers={'Content-Type': 'application/json'})
                    if response.status_code == 201:
                        print(f'Add new hackathon - {link}')
                except:
                    print(f'Can not add new hackathon - {link}')

        for link in old_links:
            if link not in hackathons_db:
                try:
                    text, name, tags, image_link, registration_link = get_info_about_hack(link, driver=driver)
                    data = {'id': link, 'text': str(text), 'tags': list(tags), 'image_link': image_link,
                            'name': name, 'registration_link': registration_link, 'end': True}
                    response = requests.post(f'http://{HOST}:{PORT}/api/hackathons', json=data,
                                             headers={'Content-Type': 'application/json'})
                    if response.status_code == 201:
                        print(f'Add old hackathon - {link}')
                except:
                    print(f'Can not add old hackathon - {link}')

            else:
                if hackathons_db[link] == False:
                    try:
                        text, name, tags, image_link, registration_link = get_info_about_hack(link, driver=driver)
                        data = {'text': str(text), 'tags': list(tags), 'image_link': image_link,
                                'name': name, 'registration_link': registration_link, 'end': True}
                        response = requests.put(f'http://{HOST}:{PORT}/api/hackathons/{link}', json=data,
                                                headers={'Content-Type': 'application/json'})
                        if response.status_code == 201:
                            print(f'Update hackathon - {link}')
                    except:
                        print(f'Can not update hackathon - {link}')
options = webdriver.ChromeOptions()
# options.add_argument('--no-sandbox')
# # options.add_argument('--headless')
remote_address = f"{HOST}:4444"

# Возможности браузера
desired_capabilities = {
    "browserName": "chrome",
    "javascriptEnabled": True
}

# Подключение к удаленному веб-драйверу
driver = webdriver.Remote(remote_address, desired_capabilities)
extract(HOST, PORT, driver=driver)
