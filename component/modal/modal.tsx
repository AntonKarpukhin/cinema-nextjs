"use client";
import { useCounterModal } from "@/zustand/modal-slice";
import Link from "next/link";
import styles from './modal.module.css';

const Modal = () => {

	const { modal, toggleModal } = useCounterModal(state => state);

	const handleModalToggle  = () => {
		toggleModal();
	};

	return (
		modal && <div className={ styles.modal }>
            <nav className={ styles.nav }>
                <ul onClick={ handleModalToggle } className={ styles.ul }>
                    <li><Link className={ styles.link } href={ { pathname: '/' } }>Главная</Link></li>
                    <li><Link className={ styles.link } href={ { pathname: '/collections' } }>Подборки</Link></li>
                    <li><Link className={ styles.link } href={ { pathname: '/search' } }>Поиск</Link></li>
                    <li><Link className={ styles.link } href={ { pathname: '/collections/multfilm' } }>Мультфильмы</Link></li>
                    <li><Link className={ styles.link } href={ { pathname: '/collections/anime' } }>Аниме</Link></li>
                    <li><Link className={ styles.link } href={ { pathname: '/collections/muzyka' } }>Музыка</Link></li>
                </ul>
            </nav>
        </div>
	)
}

export default Modal;