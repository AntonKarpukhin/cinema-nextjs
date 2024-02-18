import Modal from "@/component/modal/modal";
import FilmListCollection from "@/app/collections/[alias]/containers/film-list-collection/film-list-collection";
import styles from './page.module.css';

const CollectionsFilms = async ( {params}: {params: {alias: string}}) => {

	return (
		<main className={ styles.main }>
			<FilmListCollection alias={params.alias}/>
			<Modal/>
		</main>

	)
}

export default CollectionsFilms;