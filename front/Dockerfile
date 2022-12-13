FROM node:18.12-alpine

WORKDIR /home/app

COPY . .

EXPOSE 3000

RUN cd /home/app

RUN npm install

CMD ["npm", "start"]