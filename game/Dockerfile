# i try to write dockerfile for nginx

FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
# RUN rm /usr/share/nginx/html/index.html
COPY indexx.html  /usr/share/nginx/html



CMD ["nginx", "-g", "daemon off;"]