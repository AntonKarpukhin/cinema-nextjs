"use client";
import { useBestFilms } from "@/zustand/best-films-slice";
import { useEffect } from "react";
import SmallFilm from "@/component/small-film/small-film";
import Link from "next/link";
import styles from './best-films.module.css';

const BestFilms = () => {

	const {films, getFilms} = useBestFilms();

	useEffect( () => {
		getFilms(1);
	}, [] );

	return (
		films && <div className={styles.bestFilms}>
			<Link href={'/collections/top250'} className={styles.title}>250 лучших фильмов</Link>
			<div className={ styles.wrapper }>
				{films.slice(0, 5).map(film => <SmallFilm key={film.id} film={film} alias={'top250'}/>)}
			</div>
        </div>
	)
}

export default BestFilms;