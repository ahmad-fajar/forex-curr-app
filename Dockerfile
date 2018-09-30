FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# CMD npm start
RUN npm run build
RUN npm i -g live-server
CMD live-server build
EXPOSE 3000