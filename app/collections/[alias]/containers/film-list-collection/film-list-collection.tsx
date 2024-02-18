"use client";
import { useCollectionsFilms } from "@/zustand/collections-films-slice";
import { convertArrayToString } from "@/helpers/convertArrayToString";
import React, { useCallback, useEffect, useState } from "react";
import {
	FilmListCollectionProps
} from "@/app/collections/[alias]/containers/film-list-collection/film-list-collection.props";
import SmallFilm from "@/component/small-film/small-film";
import styles from "./film-list-collection.module.css";

const FilmListCollection = ({alias}: FilmListCollectionProps) => {

	const [counter, setCounter] = useState<number>(1);
	const {films, getFilms, addFilms, getFilmsAllStar, addFilmsAllStar, clearFilm} = useCollectionsFilms();
	const rusStr = convertArrayToString(alias);

	const slug = rusStr && encodeURIComponent(rusStr.charAt(0).toLowerCase() + rusStr.slice(1));

	useEffect( () => {
		if (alias === 'popular-films' || alias === 'honourable_mentions_XXI' || alias === 'top250') {
			callbacks.addFilmsInitialAllStars(alias, 1);
		} else {
			slug && callbacks.addFilmsInitial(slug, 1);
		}

		return () => {
			clearFilm();
		}
	}, [] );

	useEffect( () => {
		if (alias === 'popular-films' || alias === 'honourable_mentions_XXI' || alias === 'top250') {
			callbacks.addFilmsCollectionsAllStars(alias, counter);
		} else {
			slug && callbacks.addFilmsCollections(slug, counter);
		}
	}, [counter] );

	const callbacks = {
		addFilmsInitial: useCallback((collection: string, count: number) => getFilms(collection, count), []),
		addFilmsCollections: useCallback((collection: string, count: number) => addFilms(collection, count), []),
		addFilmsInitialAllStars: useCallback((collection: string, count: number) => getFilmsAllStar(collection, count), []),
		addFilmsCollectionsAllStars: useCallback((collection: string, count: number) => addFilmsAllStar(collection, count), []),
	};

	return (
		<div className={styles.filmListCollection}>
			<div className={ styles.wrapper }>
				{ films.map( film => <SmallFilm key={ film.id } film={ film } alias={alias}/> ) }
			</div>
			<button onClick={() => setCounter(counter => counter + 1)} className={styles.button}>Показать ещё</button>
		</div>
	)
}

export default FilmListCollection;