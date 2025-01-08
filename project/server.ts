import { ApolloServer } from "apollo-server";
import { GraphQLError } from "graphql";
import dotenv from "dotenv";
import { typeDefs, resolvers } from "./src/graphql/merge.js";
import { Errors } from "./src/type/enum/errors/Errors.js";

dotenv.config({path: "./src/config/.env"});
const PORT = process.env["SERVER_PORT"] || 3000;

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers,

    formatError: (err: GraphQLError | any) => {
        for(let error of Object.values(Errors)) {
            if(err.message.startsWith(error))
                return new Error(err.message);
        }
        
        return err;
    }
});

server.listen(PORT).then(({url} : {url: string}) => {
    console.log("\nServer running successfully on: ", url);
});