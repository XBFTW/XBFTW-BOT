FROM node:16
WORKDIR /opt/XBFTW-BOT

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
