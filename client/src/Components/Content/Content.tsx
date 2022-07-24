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
		<div id='book-items'>
			<For each={books()} fallback={<p>Loading...</p>}>
				{(book) => (
					<figure>
						<img src={book.coverArtUrl} alt={book.title} />
						<figcaption>
							{book.author || 'Unknown'} <br /> {book.description}
						</figcaption>
					</figure>
				)}
			</For>
		</div>
	);
};
