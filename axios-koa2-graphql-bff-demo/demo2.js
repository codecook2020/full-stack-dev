const Koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");


const typeDefs = require("./demo2/schema");
const resolvers = require("./demo2/resolvers");
const app = new Koa();

const PORT = 4000;

const SERVER = new ApolloServer({
	typeDefs,
	resolvers,
});

SERVER.applyMiddleware({ app, path: "/graph", });

app.listen(PORT, () =>
	console.log(`🚀 GraphQL playground is running at http://localhost:4000`)
);
