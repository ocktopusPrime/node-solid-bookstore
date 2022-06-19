// schema used for books data
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { type: String, required: true },
  description: { type: String, required: true },
  pageLength: { type: Number, required: true },
  ISBN: { type: Number, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
