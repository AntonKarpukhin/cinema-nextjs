import Link from "next/link";
import Image from "next/image";
import styles from './footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapperMenu}>
				<Link href={ { pathname: '/' } }>
					<Image className={ styles.img } src="/Logo.svg" alt="Логотип" width={ 287 } height={ 177 }/>
				</Link>
				<nav className={ styles.nav }>
					<p className={styles.title}>Меню</p>
					<ul className={ styles.ul }>
						<li><Link className={ styles.link } href={ { pathname: '/' } }>Главная</Link></li>
						<li><Link className={ styles.link } href={ { pathname: '/collections' } }>Подборки</Link></li>
						<li><Link className={ styles.link } href={ { pathname: '/search' } }>Поиск</Link></li>
						<li><Link className={ styles.link }
								  href={ { pathname: '/collections/multfilm' } }>Мультфильмы</Link></li>
						<li><Link className={ styles.link } href={ { pathname: '/collections/anime' } }>Аниме</Link>
						</li>
						<li><Link className={ styles.link } href={ { pathname: '/collections/muzyka' } }>Музыка</Link>
						</li>
					</ul>
				</nav>
				<div className={ styles.wrapperAbout }>
					<p className={ styles.aboutTitle}>О нас</p>
					<p className={styles.about}>
						Зная всё о кино, хочется поделиться этим с другими. Делитесь фильмами, трейлерами, персонами и новостями в социальных сетях, присваивайте рейтинги фильмам и обсуждайте их с друзьями и подписчиками!
						<br/><br/>
						Интересные фильмы, ближайшие кинотеатры и любимых актеров можно добавлять в «Избранное». Система покажет все связанные с ними новости и новые трейлеры, подскажет, когда можно купить билет в кино на интересующую премьеру. Присоединяйтесь!
					</p>
				</div>
			</div>

			<div className={styles.wrapperContacts}>
				<p className={styles.rights}>©Все права защищены Anton Karpukhin 2024</p>
				<div className={styles.wrapperImages}>
					<Link className={styles.circle} href={''}>
						<Image className={styles.contactsImg} src="/telegram.svg" alt="Телеграм" width={31} height={31}></Image>
					</Link>
					<Link className={styles.circle} href={''}>
						<Image className={styles.contactsImg} src="/git.svg" alt="Гитхаб" width={31} height={31}></Image>
					</Link>
					<Link className={styles.circle} href={''}>
						<Image className={styles.contactsImg} src="/mail.svg" alt="Почта" width={31} height={31}></Image>
					</Link>
				</div>
				<p className={styles.privacy}>Политика конфиденциальности</p>
			</div>
		</footer>
	)
};

export default Footer;