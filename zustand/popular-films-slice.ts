import { create } from "zustand";
import { RequestSmallFilm } from "@/interfaces/main-films.interface";
import { getOneFilms, getPopularFilms } from "@/helpers/api";
import { Film } from "@/interfaces/film.interface";

export interface PopularFilmsState {
	films: RequestSmallFilm[];
	getFilms: (count: number) => Promise<void>;
	popularFilms: Film[];
}

export const usePopularFilms = create<PopularFilmsState>((set, getState) => ({
	films: [],
	popularFilms: [],
	getFilms: async (count) => {
		const {docs} = await getPopularFilms(count);
		set( ( state ) => ( {
			films: [ ...state.films, ...docs.filter( newFilm => !state.films.some( oldFilm => oldFilm.id === newFilm.id ) ) ]
		} ) );
		if (getState().films.length === 10) {
			const twoMainFilmIds = getState().films.slice(1, 3 ).map(film => film.id);
			const twoMainFilms = await Promise.all(twoMainFilmIds.map(id => getOneFilms(String(id))));
			const extractedDocs = twoMainFilms.map(item => item.docs).flat();
			set(() => ({popularFilms: extractedDocs}));
		}
	},
}));