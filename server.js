const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
// const setupPassport = require('./setupPassport');

// Setup express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Configure Mongo
const db =
	process.env.NODE_ENV === 'production'
		? process.env.DBCONNECTION
		: 'mongodb://localhost/bookstore';

// Connect to Mongo with Mongoose
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log('Error connecting to MongoDB', err));

// setupPassport();

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));

// const setuppassport = require('./setupPassport');

app.get('/api/books', async (_req, res) => {
	try {
		const books = await Book.find({});
		if (books.length === 0) return res.json({ msg: 'No books in database.' });
		res.json(books);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/dist'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	);
}
