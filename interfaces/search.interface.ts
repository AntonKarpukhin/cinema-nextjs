interface Name {
	name: string;
	language?: string;
	type?: string;
}

interface ExternalId {
	imdb: string | null;
	kpHD: string | null;
	tmdb: number | null;
}

interface Rating {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await: number | null;
}

interface Votes {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await: number;
}

interface ReleaseYear {
	start: number;
	end: number;
}

interface Genre {
	name: string;
}

interface Country {
	name: string;
}

export interface Movie {
	id: number;
	name: string;
	alternativeName: string;
	enName: string;
	type: string;
	year: number;
	description: string;
	shortDescription: string;
	movieLength: number;
	isSeries: boolean;
	ticketsOnSale: boolean;
	totalSeriesLength: number | null;
	seriesLength: number | null;
	ratingMpaa: string | null;
	ageRating: string | null;
	top10: string | null;
	top250: string | null;
	typeNumber: number;
	status: string | null;
	names: Name[];
	externalId: ExternalId;
	logo: {
		url: string | null;
		previewUrl: string | null;
	};
	poster: {
		url: string;
		previewUrl: string | null;
	};
	backdrop: {
		url: string | null;
		previewUrl: string | null;
	};
	rating: Rating;
	votes: Votes;
	genres: Genre[];
	countries: Country[];
	releaseYears: ReleaseYear[];
}

export interface SearchResult {
	docs: Movie[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}
