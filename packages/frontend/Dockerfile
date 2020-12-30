FROM node:14.12.0

WORKDIR /opt/app

COPY package*.json /opt/app

RUN ["npm", "install"]

COPY . /opt/app

EXPOSE 80

CMD ["npm", "run", "dev"]
