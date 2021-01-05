FROM node:15-alpine

ARG APP=/home/node/app
WORKDIR $APP

COPY --chown=node:node package*.json $APP/

RUN ["npm", "install"]

USER node

COPY . $APP/

CMD ["npm", "run", "dev"]
