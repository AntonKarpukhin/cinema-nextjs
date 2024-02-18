import Modal from "@/component/modal/modal";
import SearchContainer from "@/app/search/containers/search-container";
import styles from './page.module.css';

const Page = () => {

	return (
		<main className={styles.main}>
			<SearchContainer/>
			<Modal/>
		</main>
	)
}

export default Page;