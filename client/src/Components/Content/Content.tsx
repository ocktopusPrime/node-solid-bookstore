import { createSignal, onMount, For } from 'solid-js';
import { baseUrl } from '../../App';
import { Book } from '../../api/Book';

import './Content.scss';

export const Content = () => {
	const [books, setBooks] = createSignal([] as Book[]);

	onMount(async () => {
		const res = await fetch(`${baseUrl}/api/books`);
		setBooks(await res.json());
	});
	return (
		<div id='books'>
			<For each={books()} fallback={<p>Loading...</p>}>
				{(book) => (
					<figure class='book-item'>
						<img class='book-image' src={book.coverArtUrl} alt={book.Name} />

						<a href='#' class='btn btn-primary ' role='button'>
							{' '}
							Add To Cart
						</a>

						<figcaption>
							{book.Name || 'Unknown title'} <br />
							{book.Author || 'Unknown author'} <br /> {book.quantity || 0}
						</figcaption>
					</figure>
				)}
			</For>
		</div>
	);
};
