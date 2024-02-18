import { create } from "zustand";
import {  getSearchFilms } from "@/helpers/api";
import { Movie } from "@/interfaces/search.interface";

export interface SearchFilmsState {
	films: Movie[];
	getFilms: (search: string, page: number) => Promise<void>;
	addFilm: (search: string, page: number) => Promise<void>;
	clearFilm: () => void;
	total: number;
	status: 'loading' | 'no result' | boolean;
}

export const useSearchFilms = create<SearchFilmsState>((set) => ({
	films: [],
	total: 0,
	status: false,
	getFilms: async (search, page) => {
		set(() => ({status: 'loading'}))
		const {docs, total} = await getSearchFilms(search, page);
		if (total === 0) {
			set(() => ({status: 'no result'}))
		} else {
			set( ( state) => ({
				films: [ ...state.films, ...docs.filter( newFilm => !state.films.some( oldFilm => oldFilm.id === newFilm.id ) ) ],
				total: total,
				status: true
			}));
		}
	},
	addFilm: async (search, page) => {
		const {docs, total} = await getSearchFilms(search, page);
		set((state) => ({
			films: [...state.films, ...docs.filter(newFilm => !state.films.some(oldFilm => oldFilm.id === newFilm.id))]
		}));
	},
	clearFilm: () => {
		set(() => ({films: [], total: 0, status: false}))
	}
}));