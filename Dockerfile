FROM ubuntu:21.04
RUN apt update && apt install -y nodejs && apt install -y npm
COPY dist ./dist/
COPY server ./
RUN npm i
EXPOSE 3000
CMD node ./server.js