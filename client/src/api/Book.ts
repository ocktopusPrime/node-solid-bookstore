// Add inventory, price, year, user rating
export interface Book {
	_id?: string;
	title: string;
	author: string;
	description?: string;
	pageLength?: number;
	genreList?: string[];
	coverArtUrl: string;
	ISBN: number;
}
