import dotenv from 'dotenv';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './src/data/schema';

dotenv.config();

const app = express();
const PORT = 8080;

// Serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
	res.send(`GraphQL is running!`)
);

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(PORT, () =>
	console.log(`Your server is running at localhose:${PORT}/graphql`)
);
