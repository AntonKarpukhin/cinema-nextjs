import { create } from "zustand";
import { RequestSmallFilm } from "@/interfaces/main-films.interface";
import { getBestFilms } from "@/helpers/api";

export interface BestFilmsState {
	films: RequestSmallFilm[];
	getFilms: (count: number) => Promise<void>;
}

export const useBestFilms = create<BestFilmsState>((set) => ({
	films: [],
	getFilms: async (count) => {
		const {docs} = await getBestFilms(count);
		set((state) => ({
			films: [...state.films, ...docs.filter(newFilm => !state.films.some(oldFilm => oldFilm.id === newFilm.id))]
		}));
	}
}));