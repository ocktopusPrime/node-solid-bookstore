const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
// const setupPassport = require('./setupPassport');
const Book = require('./models/bookModel');

// Setup express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Configure Mongo
const db =
	process.env.NODE_ENV === 'production'
		? process.env.DBCONNECTION
		: 'mongodb://localhost/bookstore';

// Connect to Mongo with Mongoose
mongoose
	.connect(db, {
		user: process.env.DB_USER,
		pass: process.env.DB_PASS,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log('Error connecting to MongoDB', err));

// setupPassport();

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));

// inital route to get all the book inventory
// const setuppassport = require('./setupPassport');
// add future routes here

app.get('/api/books', async (req, res) => {
	try {
		const books = await Book.find({});
		if (res === []) return res.json({ msg: 'No books in database.' });
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
