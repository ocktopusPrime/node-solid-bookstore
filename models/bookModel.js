// schema used for books data
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: { type: String, require: true },
	author: { type: String, required: true },
	description: { type: String, required: false },
	pageLength: { type: Number, required: false },
	genreList: [{ type: String, required: false }],
	coverArtUrl: { type: String, required: false },
	ISBN: { type: Number, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
