### STAGE 1: Build ###
FROM node:lts-alpine AS build
WORKDIR /opt
ENV PATH $WORKDIR/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run prerender

### STAGE 2: Run node ###
#FROM node:lts-alpine AS run
#WORKDIR /opt
#ENV PATH $WORKDIR/node_modules/.bin:$PATH
#COPY package.json package-lock.json ./
#RUN npm install -g express
#COPY --from=build /opt/dist /opt
#EXPOSE 8080
#CMD npm run serve:ssr
#

### STAGE 2: Run nginx ###
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /opt/dist/core /usr/share/nginx/html
