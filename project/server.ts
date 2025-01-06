import { ApolloServer } from "apollo-server";
import { GraphQLError } from "graphql";
import {typeDefs, resolvers} from "./src/graphql/merge.js";
import dotenv from "dotenv";

dotenv.config({path: "./src/config/.env"});
const PORT = process.env["SERVER_PORT"] || 3000;

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers,

    formatError: (err: GraphQLError | any) => {
        return err;
    }
});

server.listen(PORT).then(({url} : {url: string}) => {
    console.log("Server running successfully on: ", url);
});