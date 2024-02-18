interface Rating {
	kp: number;
	imdb: number;
}

interface Poster {
	url: string;
}

interface Genre {
	name: string;
}

interface Country {
	name: string;
}

export interface RequestSmallFilm {
	rating: Rating;
	id: number;
	name: string;
	poster: Poster;
	year: number;
	genres: Genre[];
	countries: Country[];
}

export interface RequestMovieList {
	docs: RequestSmallFilm[]
}