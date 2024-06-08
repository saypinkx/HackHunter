FROM selenium/node-chrome:dev

RUN mkdir /extractor
WORKDIR /extractor
COPY  . .

RUN pip install -r requirements.txt
CMD ["python","main.py"]