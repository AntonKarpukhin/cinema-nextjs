import Image from "next/image";
import { FilmSmallProps } from "@/app/(home)/components/film-small/film-small.props";
import { Genre, Person } from "@/interfaces/film.interface";
import Link from "next/link";
import styles from './film-small.module.css';

const FilmSmall = ( {film}: FilmSmallProps) => {

	const formatTime = (time: number) => {
		const totalMinutes = time;
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return {
			hours,
			minutes
		}
	}

	const formatSting = (arr: Genre[]) => {
		return arr.map( ( str, i ) => {
			const newStr = str.name[0].toUpperCase() + str.name.slice(1)
			if ( arr[ arr.length - 1 ] === str ) {
				return newStr
			} else {
				return newStr + ','
			}
		} ).join(' ')
	}

	const formatActors = (actors: Person[]) => {
		return actors.slice(0, 5).map(actor => {
			if ( actors[ actors.slice(0, 5).length - 1 ].id === actor.id ) {
				return actor.name
			} else {
				return actor.name + ', '
			}
		});
	}

	const time = formatTime(+film.movieLength);
	const genre = formatSting(film.genres);
	const country = formatSting(film.countries);
	const actors = formatActors(film.persons);

	return (
		<div className={styles.mainFilm}>
			<div className={styles.wrapperImg}>
				<Image className={styles.img} src={film.poster.url} width={428} height={666} alt={film.name}/>
				<div className={styles.wrapperRating}>
					<div className={styles.wrapperKp}>
						<p className={styles.kpRating}>{film.rating.kp.toFixed(1)}</p>
						<p className={styles.kp}>Кинопоиск</p>
					</div>
					<div className={styles.wrapperImd}>
						<p className={styles.imdRating}>{film.rating.imdb.toFixed(1)}</p>
						<p className={styles.imd}>IMDb</p>
					</div>
				</div>
			</div>

			<div className={ styles.wrapperRight }>
				<div className={ styles.wrapperName }>
					<p className={ styles.name }> { film.name } <span>{ `(${ film.year })` }</span></p>
					<p className={ styles.enName }>{ film.alternativeName }</p>
				</div>

				<div className={ styles.wrapperYear }>
					<div className={styles.wrapperPremier}>
						<p className={styles.subDescr}>Продолжительность</p>
						<p className={styles.subData}>{`${time.hours} час ${time.minutes} минут`}</p>
					</div>
					<div className={styles.wrapperPremier}>
						<p className={styles.subDescr}>Год выпуска</p>
						<p className={styles.subData}>{film.year}</p>
					</div>
					<div className={styles.wrapperPremier}>
						<p className={styles.subDescr}>Премьера фильма в России</p>
						<p className={styles.subData}>{film.premiere.russia.slice(0, 10)}</p>
					</div>
					<div className={styles.wrapperPremier}>
						<p className={styles.subDescr}>Возраст</p>
						<p className={styles.subData}>{film.ageRating}</p>
					</div>
				</div>

				<div className={ styles.wrapperCountries }>
					<div className={styles.wrapperCountriesTitle}>
						<p className={styles.countiesTitle}>Жанр</p>
						<p className={styles.countriesInfo}>{genre}</p>
					</div>
					<div className={styles.wrapperCountriesTitle}>
						<p className={styles.countiesTitle}>Страна</p>
						<p className={styles.countriesInfo}>{country}</p>
					</div>
					<div className={styles.wrapperCountriesTitle}>
						<p className={styles.countiesTitle}>В главных ролях</p>
						<p className={styles.countriesInfo}>{actors}</p>
					</div>
				</div>

				<div className={styles.wrapperDescription}>
					<p className={styles.descriptionTitle}>{`О чем фильм “${film.name} (${film.year})”`}</p>
					<p className={styles.description}>{film.description}</p>
					<Link className={styles.link} href={`/collections/popular-films/${film.id}`}>Еще</Link>
				</div>

			</div>
		</div>
	)
}

export default FilmSmall;