"use client";
import { useCounterModal } from "@/zustand/modal-slice";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
	const { modal, toggleModal } = useCounterModal(state => state);

	const handleModalToggle  = () => {
		toggleModal();
	};

	return (
		<header className={styles.header}>
			<Link href={ { pathname: '/' } }>
				<Image className={ styles.img } src="/Logo.svg" alt="Логотип" width={157} height={94}/>
			</Link>
			<nav className={ styles.nav }>
				<ul className={ styles.ul }>
					<li><Link className={ styles.link } href={ { pathname: '/' } }>Главная</Link></li>
					<li><Link className={ styles.link } href={ { pathname: '/collections' } }>Подборки</Link></li>
					<li><Link className={ styles.link } href={ { pathname: '/search' } }>Поиск</Link></li>
					<li><Link className={ styles.link } href={ { pathname: '/collections/multfilm' } }>Мультфильм</Link>
					</li>
					<li><Link className={ styles.link } href={ { pathname: '/collections/anime' } }>Аниме</Link></li>
					<li><Link className={ styles.link } href={ { pathname: '/collections/muzyka' } }>Музыка</Link></li>

				</ul>
			</nav>
			<button className={ styles.button } onClick={ handleModalToggle } type='button'>
				<Image src={!modal ? "/hamburgerOpen.svg" : "/hamburgerClose.svg"} alt="Открыть меню" width={20} height={20} style={{ width: 'auto', height: 'auto' }}/>
			</button>
		</header>
	)
};

export default Header;