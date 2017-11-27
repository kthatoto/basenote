FROM nginx:1.13.0

RUN mkdir /wwwroot
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./favicon.ico /wwwroot

RUN service nginx start
