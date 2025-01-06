import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { DocumentNode } from "graphql";
import { IResolvers } from "@graphql-tools/utils";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const allTypeDefs: DocumentNode[] = loadFilesSync(
    join(__dirname, "./modules", "**", "schema.gql"), {extensions: ["gql"]}
);

const allResolvers: IResolvers[] = loadFilesSync(
    join(__dirname, "./modules", "**", "resolver.js"), {extensions: ["js"]}
);

const typeDefs: DocumentNode = mergeTypeDefs(allTypeDefs);
const resolvers: IResolvers = mergeResolvers(allResolvers) as IResolvers;

export { typeDefs, resolvers };