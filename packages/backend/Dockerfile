FROM node:14.12.0

WORKDIR /opt/app

COPY package*.json /opt/app/

RUN ["npm", "install"]

COPY . /opt/app

CMD ["npm", "run", "dev"]
