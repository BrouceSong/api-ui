FROM nginx:1.17
MAINTAINER silver fox
COPY dist/  /data/www/api-ui/
COPY default.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /data/service_log/nginx
