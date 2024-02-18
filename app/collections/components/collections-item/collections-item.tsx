import Image from "next/image";
import { CollectionsItemProps } from "@/app/collections/components/collections-item/collections-item.props";
import Link from "next/link";
import styles from './collections-item.module.css';

const CollectionsItem = ({name, slug, img}: CollectionsItemProps) => {

    return (
		<Link href={`/collections/${slug}`} className={styles.collectionsItem}>
            <Image className={styles.img} src={img ?? ''} alt={name ?? 'картинка не загружены'} width={428} height={355} style={{ width: '100%', height: '100%' }}/>
			<p className={styles.title}>{name}</p>
        </Link>
    )
}

export default CollectionsItem;