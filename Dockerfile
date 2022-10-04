FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app
#COPY src destino
COPY ./backend ./

RUN npm install

CMD [ "npm", "run", "start" ]