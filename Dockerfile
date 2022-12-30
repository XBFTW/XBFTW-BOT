FROM node:18
RUN mkdir -p /opt/XBFTW-BOT
WORKDIR /opt/XBFTW-BOT

# Copy dependencies first to improve layer caching
COPY package*.json ./
RUN npm install --production

COPY . .

ENV TOKEN=
ENV CLIENT_ID=
ENV PREFIX=!
ENV OWNERID=415687999641354250
ENV SPOTIFYID=
ENV SPOTIFYSECRET=
ENV MONGO_URI=
ENV COlOR=
ENV LOGS=957219129457274901
ENV IMG=https://xbftw.com/assets/img/xbftw.png
ENV SUPPORT=https://xbftw.com/discord
ENV INVITE=https://xbftw.com/bot/invite
ENV NODE_HOST=lavalink.xbftw.com
ENV NODE_ID=
ENV NODE_PORT=2000
ENV NODE_PASSWORD=youshallnotpass
ENV NODE_SECURE=false



CMD [ "npm", "start" ]