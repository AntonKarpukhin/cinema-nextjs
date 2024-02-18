"use client";
import { useFilm } from "@/zustand/film-slice";
import FilmItem from "@/app/collections/[alias]/[id]/components/film-item/film-item";
import { useCallback, useEffect } from "react";
import Modal from "@/component/modal/modal";
import styles from './page.module.css';

const CollectionsFilm = ({params}: {params: {id: string}}) => {

	const {film, getFilm, clearFilm} = useFilm();

	useEffect( () => {
		callbacks.addFilmInitial(params.id);

		return () => {
			callbacks.clearStateFilm();
		}
	}, [] );

	const callbacks = {
		addFilmInitial: useCallback((id: string) => getFilm(id), []),
		clearStateFilm: useCallback(() => clearFilm(), []),
	};

	return (
		film && <main className={ styles.main }>
			<FilmItem film={film.flat()[0]}/>
            <Modal/>
		</main>
	);
}

export default CollectionsFilm;