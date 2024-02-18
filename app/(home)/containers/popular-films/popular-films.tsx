"use client";
import React, {  useEffect } from "react";
import SmallFilm from "@/component/small-film/small-film";
import { usePopularFilms } from "@/zustand/popular-films-slice";
import MainFilms from "@/app/(home)/components/main-films/main-films";
import Link from "next/link";
import styles from './popular-films.module.css';

const PopularFilms = () => {

	const {films, popularFilms, getFilms} = usePopularFilms();

	useEffect( () => {
		getFilms(1);
	}, [] );

	return (
		<>
			<div className={styles.popularFilms}>
				<Link href={'/collections/popular-films'} className={styles.title}>Популярные фильмы</Link>
				<div className={ styles.wrapper }>
					{films.slice(0, 5).map(film => <SmallFilm key={film.id} film={film} alias={'popular-films'}/>)}
				</div>
			</div>
			<MainFilms films={popularFilms}/>
		</>
	)
}

export default PopularFilms;