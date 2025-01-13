FROM node:23.4.0-alpine
EXPOSE 3000
WORKDIR /app

COPY package*.json .

RUN npm install apollo-server \
                graphql \
                graphql-tools \
                @graphql-tools/load-files \
                @graphql-tools/utils \
                typescript \
                @types/node \
                ts-node \
                dotenv \
                validation-br

COPY . .

CMD [ "npm", "start" ]