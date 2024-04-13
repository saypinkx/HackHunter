from python:3.10
RUN mkdir /server
WORKDIR /server
COPY  . .
RUN pip install -r requirements.txt
CMD ["uvicorn","main:app","--host","0.0.0.0", "--port","8000"]