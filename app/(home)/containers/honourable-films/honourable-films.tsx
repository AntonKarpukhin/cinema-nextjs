"use client";
import { useHonourableFilms } from "@/zustand/honourable-films-slice";
import { useEffect } from "react";
import SmallFilm from "@/component/small-film/small-film";
import Link from "next/link";
import styles from './honourable-films.module.css';

const HonourableFilms = () => {

	const {films, getFilms} = useHonourableFilms();

	useEffect( () => {
		getFilms(1);
	}, [] );

	return (
		films && <div className={styles.honourableFilms}>
            <Link href={'/collections/honourable_mentions_XXI'} className={styles.title}>100 великих фильмов XXI века</Link>
            <div className={ styles.wrapper }>
				{films.slice(0, 5).map(film => <SmallFilm key={film.id} film={film} alias={'honourable_mentions_XXI'}/>)}
            </div>
        </div>
	)
}

export default HonourableFilms;