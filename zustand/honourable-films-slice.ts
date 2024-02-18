import { create } from "zustand";
import { RequestSmallFilm } from "@/interfaces/main-films.interface";
import { getHonourableFilms } from "@/helpers/api";

export interface HonourableFilmsState {
	films: RequestSmallFilm[];
	getFilms: (count: number) => Promise<void>;
}

export const useHonourableFilms = create<HonourableFilmsState>((set) => ({
	films: [],
	getFilms: async (count) => {
		const {docs} = await getHonourableFilms(count);
		set((state) => ({
			films: [...state.films, ...docs.filter(newFilm => !state.films.some(oldFilm => oldFilm.id === newFilm.id))]
		}));
	}
}));