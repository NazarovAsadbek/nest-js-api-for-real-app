FROM node:16.15.0-alpine

RUN mkdir -p /var/www/back-end/nest-js-realworld-api
WORKDIR /var/www/back-end/nest-js-realworld-api

COPY package*.json ./
RUN yarn

COPY . .

RUN yarn build
RUN yarn db:drop
RUN yarn db:create
RUN yarn db:migrate

EXPOSE 3003

CMD [ "yarn", "start:prod" ]
