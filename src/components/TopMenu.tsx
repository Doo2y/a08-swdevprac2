import styles from './TopMenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className={styles.menucontainer}>
            <div className={styles.spacer}></div>
            <TopMenuItem title='booking' pageRef='booking'/>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt = 'logo'
            width={0} height={0} sizes='100vs'/>
            
        </div>
    );
}