// import { GraphQLJSONObject } from '';

const  { GraphQLJSONObject }  = require('graphql-type-json');
const { GraphQLSchema, GraphQLScalarType } = require('graphql');
const userData = [
	{
		id: 1,
		name: 'peter',
		email: '48mm@hello.com',
		rule:'user',
		status:1,
		demoOdj:{
			github_name:'codecook2020',
			github_url:'https://github.com/codecook2020/full-stack-js.git'
		}
	},
	{
		id: 2,
		name: 'jack',
		email: 'jack@hello.com',
		rule:'manage',
		status:1,
		demoOdj:{
			otherId:[1,2,3,5]
		}
	},
	{
		id: 3,
		name: 'lu',
		email: 'lu@hello.com',
		rule:'manage',
		status:0
	},
	{
		id: 4,
		name: 'jobs',
		email: 'jobs531@hello.com',
		rule:'user',
		status:0
	},
	{
		id: 5,
		name: 'james',
		email: 'james531@hello.com',
		rule:'user',
		status:1
	},
	{
		id: 5,
		name: 'cook',
		china_name: '毒师',
		email: 'james531@hello.com',
		rule:'user',
		status:0
	}
];


// 好处是可以在这里做校验
//来自： https://stackoverflow.com/questions/45598812/graphql-blackbox-any-type
const anyType = new GraphQLScalarType({
	name: 'anyType',
  description: 'any',
  parseValue: (value) => {
    return typeof value === 'object' ? value
      : typeof value === 'string' ? JSON.parse(value)
      : null
  },
  serialize: (value) => {
    return typeof value === 'object' ? value
      : typeof value === 'string' ? JSON.parse(value)
      : null
  },
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.STRING: return JSON.parse(ast.value)
      case Kind.OBJECT: throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`)
      default: return null
    }
  }
});


const resolvers = {
	anyObj: anyType,
	Query: {
		alluser: () => {
			return userData;
		},
		user: (root, { rule, status }) => {
			return userData.filter(item => {
				// console.log(typeof rule, typeof status, Boolean(rule), Boolean(status));
				if(status !== undefined && rule) {
					return (item.rule === rule) && (item.status === status);
				}
				return (item.rule === rule) || (item.status === status);
			});
		}
	}
};

module.exports = resolvers;


// ps 多个查询
// var filters = {
// 	name:['Leila', 'Jay'],
// 	age:[]
// }
// export function multiFilter(array, filters) {
//   const filterKeys = Object.keys(filters)
//   // filters all elements passing the criteria
//   return array.filter((item) => {
//     // dynamically validate all filter criteria
//     return filterKeys.every(key => {
//         //ignore when the filter is empty Anne
//       if(!filters[key].length) return true
//       return !!~filters[key].indexOf(item[key])
//     })
//   })
// }
/*
 * 作者是：@author https://gist.github.com/jherax
 */
// https://segmentfault.com/q/1010000012735768