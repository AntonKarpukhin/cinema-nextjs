import Image from "next/image";
import styles from './title-info.module.css';

const TitleInfo = () => {
	return (
		<div className={styles.titleInfo}>
			<div className={styles.wrapper}>
				<Image className={styles.img} src='/title.png' alt='Картика Мстителей' width={1510} height={450} style={{ width: '100%', height: '100%' }}/>
				<h2 className={styles.title}>Лучшие фильмы всех времен</h2>
			</div>
			<p className={styles.text}>MovieDB.ru - онлайн фильмы в хорошем HD качестве бесплатно и без регистрации. На нашем кинопортале вы можете смотреть онлайн лучшие фильмы в HD качестве, причем абсолютно бесплатно и без регистрации! Мы собрали для Вас подборку лучших фильмов. В неё вошли фильмы следующих жанров: боевики, мелодрамы, детективы, триллеры и так далее.  Располагайтесь поудобнее! Выбирайте фильм и приятного просмотра! </p>
		</div>
	)
}

export default TitleInfo;