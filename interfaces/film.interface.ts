interface Rating {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await: null;
}

export interface PremiereDates {
	world: string;
	russia: string;
	bluray: string;
	dvd: string;
}

interface Poster {
	url: string;
	previewUrl: string;
}

export interface Genre {
	name: string;
}

interface Country {
	name: string;
}

export interface Person {
	id: number;
	photo: string;
	name: string;
	enName: string;
	description: string | null;
	profession: string;
	enProfession: string;
}

interface Video {
	url: string;
	name: string;
	site: string;
	type: string;
}

export interface Film {
	rating: Rating;
	id: number;
	name: string;
	description: string;
	premiere: PremiereDates;
	year: number;
	poster: Poster;
	genres: Genre[];
	countries: Country[];
	persons: Person[];
	alternativeName: string;
	ageRating: number;
	movieLength: string;
	videos: {
		trailers: Video[];
	};
}

export interface FilmResponse {
	docs: Film;
}

export interface FilmsResponse {
	docs: Film[];
}