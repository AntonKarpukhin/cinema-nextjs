import FilmSmall from "@/app/(home)/components/film-small/film-small";
import { MainFilmsProps } from "@/app/(home)/components/main-films/main-films.props";
import styles from './main-films.module.css';

const MainFilms = ( {films}: MainFilmsProps) => {

	return (
		films && <div className={styles.mainFilmsContainer}>
			{ films.map( film => <FilmSmall key={ film.id } film={ film }/> ) }
		</div>
	)
}

export default MainFilms;