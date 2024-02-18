import { create } from "zustand";
import { getOneFilms} from "@/helpers/api";
import { Film } from "@/interfaces/film.interface";

export interface FilmState {
	film: Film[] | null;
	getFilm: (count: string) => Promise<void>;
	clearFilm: () => void;
}

export const useFilm = create<FilmState>((set) => ({
	film: null,
	getFilm: async (count: string) => {
		const {docs} = await getOneFilms(count);
		set(() => ({film: [docs]}))
	},
	clearFilm: () => {
		set(() => ({film: null}))
	}
}));