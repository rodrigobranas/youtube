const { ApolloServer } = require("apollo-server");

const typeDefs = `

	type Item {
		id: Int
		type: String
		description: String
	}

	type Query {
		items(type: String): [Item]
	}

	input ItemInput {
		type: String
		description: String
	}

	type Mutation {
		saveItem(item: ItemInput): Item
		deleteItem(id: Int): Boolean
	}

`;

const items = [
	{ id: 1, type: "prefix", description: "Air" },
	{ id: 2, type: "prefix", description: "Jet" },
	{ id: 3, type: "prefix", description: "Flight" },
	{ id: 4, type: "suffix", description: "Hub" },
	{ id: 5, type: "suffix", description: "Station" },
	{ id: 6, type: "suffix", description: "Mart" },
];

const resolvers = {
	Query: {
		items(_, args) {
			return items.filter(item => item.type === args.type);
		}
	},
	Mutation: {
		saveItem(_, args) {
			const item = args.item;
			item.id = Math.floor(Math.random() * 1000);
			items.push(item);
			return item;
		},
		deleteItem(_, args) {
			const id = args.id;
			const item = items.find(item => item.id === id);
			if (!item) return false;
			items.splice(items.indexOf(item), 1);
			return true;
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();
