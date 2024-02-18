import { create } from "zustand";
import { getCollectionsAllStars, getCollectionsFilms } from "@/helpers/api";
import { Film } from "@/interfaces/film.interface";

export interface CollectionsFilmsState {
	films: Film[];
	getFilms: (collection: string, count: number) => Promise<void>;
	getFilmsAllStar: (collection: string, count: number) => Promise<void>;
	addFilms: (collection: string, count: number) => Promise<void>;
	addFilmsAllStar: (collection: string, count: number) => Promise<void>;
	clearFilm: () => void;
}

export const useCollectionsFilms = create<CollectionsFilmsState>((set) => ({
	films: [],
	getFilms: async (collection, count) => {
		const {docs} = await getCollectionsFilms(collection, count);
		set(() => ({
			films: [...docs]
		}));
	},
	getFilmsAllStar: async (collection, count) => {
		const {docs} = await getCollectionsAllStars(collection, count);
		set(() => ({
			films: [...docs]
		}));
	},
	addFilms: async (collection, count) => {
		const {docs} = await getCollectionsFilms(collection, count);
		set((state) => ({
			films: [...state.films, ...docs.filter(newFilm => !state.films.some(oldFilm => oldFilm.id === newFilm.id))]
		}));
	},
	addFilmsAllStar: async (collection, count) => {
		const {docs} = await getCollectionsAllStars(collection, count);
		set((state) => ({
			films: [...state.films, ...docs.filter(newFilm => !state.films.some(oldFilm => oldFilm.id === newFilm.id))]
		}));
	},
	clearFilm: () => {
		set(() => ({films: []}))
	}
}));