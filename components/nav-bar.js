import Link from 'next/link'
import styles from '../styles/navbar.module.css'


export default function Navigation (){
    return (
        <nav className={styles.nav}>
            <img src="../public/main-logo.png" alt="logo"/>
            <ul className={styles.link}>
                <Link href="/">
                    <li className={styles.list}>
                        <a className={styles.listlink}>Home</a>
                    </li>
                </Link>
                <Link href="">
                    <li className={styles.list}>
                        <a className={styles.listlink}>About Us</a>
                    </li>
                </Link>
                <Link href="">
                    <li className={styles.list}>
                        <a className={styles.listlink}>Services</a>
                    </li>
                </Link>
                <Link href="">
                    <li className={styles.list}>
                        <a className={styles.listlink}>Contact Us</a>
                    </li>
                </Link>
            </ul>

            <img className={styles.cart} src="cart.png" alt="cart"/>
            <button className={styles.button}>Sign In</button>

        </nav>
    )
}