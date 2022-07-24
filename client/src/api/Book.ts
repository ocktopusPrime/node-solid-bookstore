export interface Book {
	Name: string;
	Author: string;
	coverArtUrl: string;
	ISBN: number;
	Quantity: number;
	price: string;
	year: number;
	description?: string;
	pageLength?: number;
	genreList?: string[];
	userRating?: number;
}
