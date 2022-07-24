// Add inventory, price, year, user rating
export interface Book {
	title: string;
	author: string;
	coverArtUrl: string;
	ISBN: number;
	quantity: number;
	price: number;
	year: number;
	description?: string;
	pageLength?: number;
	genreList?: string[];
	userRating?: number;
}
