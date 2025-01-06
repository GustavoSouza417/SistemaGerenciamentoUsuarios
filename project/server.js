import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/graphql/merge.js";
import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });
const PORT = process.env["SERVER_PORT"] || 3000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
        return err;
    }
});
server.listen(PORT).then(({ url }) => {
    console.log("\nServer running successfully on: ", url);
});
