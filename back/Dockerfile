FROM node:18.12-alpine

WORKDIR /home/app

COPY . .

EXPOSE 5000

RUN cd /home/app

RUN npm install

CMD ["npm", "start"]