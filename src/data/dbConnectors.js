import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Mongo connection
//
const DB_CREDENTIALS = process.env.DB_CREDENTIALS;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${DB_CREDENTIALS}@coder-g8zwo.gcp.mongodb.net/test?retryWrites=true&w=majority`, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});



const contactSchema = new mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	email: {
		type: String
	},
});

const Contacts = mongoose.model('contacts', contactSchema);

export { Contacts };
