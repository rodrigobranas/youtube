const { ApolloServer } = require('apollo-server');
const database = require('./database');

const typeDefs = `

	type Item {
		id: Int
		category: String
		description: String
		price: Float
	}

	type Query {
		items: [Item]
	}

	input ItemInput {
		category: String,
		description: String
		price: Float
	}

	type Mutation {
		saveItem(item: ItemInput): Item
	}
`;

const resolvers = {
	Query: {
		async items() {
			const items = await database.query('select * from item');
			return items;
		}
	},
	Mutation: {
		async 	saveItem(_, args) {
			const item = args.item;
			item.id = Math.floor(Math.random() * 100000);
			const newItem = await database.one('insert into item (id, category, description, price) values ($1, $2, $3, $4) returning *', [item.id, item.category, item.description, item.price]);
			return newItem;
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();
