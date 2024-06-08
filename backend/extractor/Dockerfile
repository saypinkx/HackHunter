from python:3.10
#USER root
#RUN apt-get update && apt-get install python3-distutils -y
#RUN wget https://bootstrap.pypa.io/get-pip.py
#RUN python3 get-pip.py
#RUN python3 -m pip install selenium
RUN mkdir /extractor
WORKDIR /extractor
COPY  . .
RUN pip install -r requirements.txt
CMD ["python3","main.py"]