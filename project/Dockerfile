FROM node:23.4.0-alpine
EXPOSE 3000
WORKDIR /app
COPY . .

RUN npm install apollo-server \
                graphql \
                graphql-tools \
                @graphql-tools/load-files \
                @graphql-tools/utils \
                typescript \
                @types/node \
                ts-node \
                dotenv \
                fs \
                validation-br \
                crypto

CMD [ "npm", "start" ]