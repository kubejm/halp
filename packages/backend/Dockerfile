FROM node:15-alpine

ARG APP=/home/node/app
WORKDIR $APP

COPY package*.json $APP/

RUN ["npm", "install"]

COPY . $APP/

CMD ["npm", "run", "dev"]
