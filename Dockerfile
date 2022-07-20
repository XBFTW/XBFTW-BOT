FROM node:16
WORKDIR /opt/XBFTW-BOT

COPY package*.json ./

RUN npm install

CMD [ "npm", "start" ]
