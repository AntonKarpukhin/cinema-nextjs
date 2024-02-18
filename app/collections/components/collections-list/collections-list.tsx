import CollectionsItem from "@/app/collections/components/collections-item/collections-item";
import { collectionsData } from "@/helpers/data";
import styles from './collections-list.module.css';

const CollectionsList = () => {
	return (
		<div className={styles.collectionsList}>
			{collectionsData.slice(0, 12).map(item => {
				return (
					<CollectionsItem key={item.name} name={item.name} slug={item.slug} img={item.img} />
				)
			})}
		</div>
	)
}

export default CollectionsList;