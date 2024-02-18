import Modal from "@/component/modal/modal";
import React from "react";
import TitleInfo from "@/app/(home)/components/title-info/title-info";
import BestFilms from "@/app/(home)/containers/best-films/best-films";
import HonourableFilms from "@/app/(home)/containers/honourable-films/honourable-films";
import PopularFilms from "@/app/(home)/containers/popular-films/popular-films";
import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
		<TitleInfo/>
		<Modal/>
		<BestFilms/>
		<HonourableFilms/>
		<PopularFilms/>
	</main>
  );
};