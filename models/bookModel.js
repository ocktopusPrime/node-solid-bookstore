// schema used for books data
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Add inventory, price, year, user rating
const bookSchema = new Schema({
	Name: { type: String, require: true },
	Quantity: { type: String, require: true },
	price: { type: Number, require: true },
	year: { type: Number, require: true },
	userRating: { type: Number, required: false },
	Author: { type: String, required: true },
	description: { type: String, required: false },
	pageLength: { type: Number, required: false },
	genreList: [{ type: String, required: false }],
	coverArtUrl: { type: String, required: false },
	ISBN: { type: Number, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
