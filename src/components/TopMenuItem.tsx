import Link from "next/link";
import styles from './TopMenu.module.css';

export default function TopMenuItem ( { pageRef , title} : {pageRef:string,title:string}  ) {
    return (
        <Link href={pageRef} className={styles.itemcontainer}>
            {title}
        </Link>
    );
}