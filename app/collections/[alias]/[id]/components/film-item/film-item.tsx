import Image from "next/image";
import { Genre, Person } from "@/interfaces/film.interface";
import { FilmItemProps } from "@/app/collections/[alias]/[id]/components/film-item/film-item.props";
import YouTubePlayer from "@/helpers/youTubePlayer ";
import styles from './film-item.module.css';

const FilmItem = ( {film}: FilmItemProps) => {

	const formatTime = (time: number) => {
		const totalMinutes = time;
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return {
			hours,
			minutes
		}
	};

	const formatSting = (arr: Genre[]) => {
		return arr.map( ( str, i ) => {
			const newStr = str.name[0].toUpperCase() + str.name.slice(1);
			if ( arr[ arr.length - 1 ] === str ) {
				return newStr
			} else {
				return newStr + ','
			}
		} ).join(' ')
	};

	const formatActors = (actors: Person[]) => {

		return actors.slice(0, 5).map(actor => {
			if ( actors[ actors.slice(0, 5).length - 1 ].id === actor.id ) {
				return actor.name
			} else {
				return actor.name + ', '
			}
		});
	};



	const time = formatTime(+film.movieLength) ?? '---' ;
	const genre = formatSting(film.genres);
	const country = formatSting(film.countries);
	const actors = formatActors(film.persons);

	const videoIds = film.videos?.trailers?.map((trailer, index, array) => {
		if (trailer.url) {
			const match = trailer.url.match(/\/embed\/(.+)$/);
			return match ? match[1] : null;
		} else {
			const nextTrailer = array.slice(index + 1).find(trailer => trailer.url);
			if (nextTrailer) {
				const match = nextTrailer.url.match(/\/embed\/(.+)$/);
				return match ? match[1] : null;
			} else {
				return null;
			}
		}
	});
	const viewVideoIds = videoIds?.find(value => value !== null);

	return (
		<div className={styles.mainFilm}>
			<div className={styles.wrapperImg}>
				<Image className={styles.img} src={film.poster.url} width={428} height={666} alt={film.name} style={{ width: '100%', height: '100%' }}/>
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
				<div className={styles.youTube}>
					<YouTubePlayer width="100%" height="100%" id={viewVideoIds}/>
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
						<p className={styles.subData}>{film.year ?? 'Год выхода не известен'}</p>
					</div>
					<div className={styles.wrapperPremier}>
						<p className={styles.subDescr}>Премьера фильма в России</p>
						<p className={styles.subData}>{film.premiere.russia?.slice(0, 10) ?? film.year}</p>
					</div>
					<div className={styles.wrapperPremier}>
						<p className={styles.subDescr}>Возраст</p>
						<p className={styles.subData}>{film.ageRating ?? '0+'}</p>
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
				</div>

				<div className={ styles.director }>
					<p className={ styles.pDirector }>Режиссер</p>
					<div className={styles.dWrapperGrid}>
						{ film.persons.filter( item => item.profession === 'режиссеры' ).map( item => {
							return (
								<div className={ styles.dWrapper } key={item.name}>
									<Image src={ item.photo } alt={ item.name } width={ 40 } height={ 50 }/>
									<p className={ styles.dName }>{ item.name }</p>
								</div>
							)
						} ) }
					</div>

					<p className={ styles.pDirector }>В ролях</p>
					<div className={styles.dWrapperGrid}>
						{ film.persons.filter( item => item.profession === 'актеры' ).map( item => {
							return (
								<div className={ styles.dWrapper } key={item.name}>
									<Image src={ item.photo } alt={ item.name } width={ 40 } height={ 50 }/>
									<p className={ styles.dName }>{ item.name }</p>
								</div>
							)
						} ) }
					</div>
				</div>
			</div>
		</div>
	)
};

export default FilmItem;