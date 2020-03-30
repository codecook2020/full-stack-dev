const { ApolloServer, gql } = require("apollo-server-koa");
// 定义数据模型 &查询模型
const typeDefs = gql`
  scalar anyObj

	type Users {
		id: Int!
		name: String!
		email: String!
		rule: String!
		status:Int!
		demoOdj: anyObj
	}

	type Query {
		alluser: [Users]
		user( rule: String, status: Int): [Users]
	}
`;

module.exports = typeDefs;

