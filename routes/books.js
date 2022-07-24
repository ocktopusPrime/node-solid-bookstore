const express = require('express');
const router = express.Router();

// Getting list of all the books from the inventory
router.route('/books').get((req, res) => {
	Book.find()
		.then((book) => res.json(book))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// Adding book to inventory
router.route('/book').post((req, res) => {
	const author = req.body.username;
	const description = req.body.description;
	const pageLength = Number(req.body.duration);
	const ISBN = Number(req.body.date);

	const newBook = new Book({
		author,
		description,
		pageLength,
		ISBN
	});

	newBook
		.save()
		.then(() => res.json('Book added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// Find book by id
router.route('/book/:id').get((req, res) => {
	Book.findById(req.params.id)
		.then((book) => res.json(book))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// Delete book by id
router.route('/book/:id').delete((req, res) => {
	Book.findByIdAndDelete(req.params.id)
		.then(() => res.json('Book deleted.'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// Update book by id
router.route('/:id').post((req, res) => {
	Book.findById(req.params.id)
		.then((book) => {
			book.author = req.body.author;
			book.description = req.body.description;
			book.pageLength = Number(req.body.pageLength);
			book.ISBN = Number(req.body.ISBN);

			book.save()
				.then(() => res.json('Book updated!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
