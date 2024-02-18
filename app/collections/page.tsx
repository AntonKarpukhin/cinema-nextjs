import CollectionsList from "@/app/collections/components/collections-list/collections-list";
import Modal from "@/component/modal/modal";
import React from "react";
import styles from "./page.module.css";

export default function Collections () {
	return (
		<main className={styles.main}>
			<CollectionsList/>
			<Modal/>
        </main>
	)
}