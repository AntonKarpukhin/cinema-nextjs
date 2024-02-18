import { SmallFilmProps } from "@/component/small-film/small-film.props";
import Image from "next/image";
import Link from "next/link";
import styles from './small-film.module.css';

const SmallFilm = ({ film, alias }: SmallFilmProps) => {

	return (
		film && <Link className={styles.smallFilm} href={`/collections/${alias}/${film.id}`}>
			<Image className={styles.img} src={film?.poster?.url ?? 'https://i.pinimg.com/736x/25/52/81/25528187d8a32d1c998a63e3b301de86.jpg'} alt={film.name ?? 'alt'} width={272} height={381} style={{ width: '100%', height: '100%' }}/>
			<div className={styles.wrapperRating}>
				<div className={styles.wrapperImg}>
					<Image src="/kp.svg" alt="Кинопоиск" width={34} height={34}/>
					<p className={styles.kp}>{ film?.rating?.kp.toFixed(1) }</p>
				</div>
				<div className={styles.wrapperImg}>
					<Image src="/imd.svg" alt="IMD" width={34} height={34}/>
					<p className={styles.imd}>{ film?.rating?.imdb.toFixed(1) }</p>
				</div>
			</div>
			<p className={styles.name}>{film?.name}</p>
			<p className={styles.genre}>{`${film?.year}, ${film?.genres[0]?.name}, ${film?.countries[0]?.name}`}</p>
		</Link>
	);
};

export default SmallFilm;