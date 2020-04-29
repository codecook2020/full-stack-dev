// 最简实践  http://127.0.0.1:3001/graph?query={hello}
const Koa = require("koa");
const { ApolloServer, gql } = require("apollo-server-koa");

// 主要接入查询
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// resolvers 主要接入api调用
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};


const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
});

const app = new Koa();
server.applyMiddleware({ app, path: "/graph" });


const port = 3001;

app.listen(port, () => console.log(`listening at port ${port} \n 也许你可以尝试：http://127.0.0.1:${port}/graph?query={hello}`));
