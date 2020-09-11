import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      {/* <div>
          <Button />
      </div> */}
      <img className={styles.img} src="/main-logo.png" alt="logo" />

      <ul className={styles.link}>
        <Link href="/">
          <li className={styles.list}>
            <a className={styles.listlink}>Home</a>
          </li>
        </Link>
        <Link href="/about">
          <li className={styles.list}>
            <a className={styles.listlink}>About Us</a>
          </li>
        </Link>
        <Link href="/services">
          <li className={styles.list}>
            <a className={styles.listlink}>Services</a>
          </li>
        </Link>
        <Link href="/product">
          <li className={styles.list}>
            <a className={styles.listlink}>Products</a>
          </li>
        </Link>
        <Link href="/contact">
          <li className={styles.list}>
            <a className={styles.listlink}>Contact Us</a>
          </li>
        </Link>
      </ul>
      <img className={styles.cart} src="/cart.png" alt="cart" />

      <Link href="/user/auth/login">
        <a>
          <button className={styles.button}>Sign In</button>
        </a>
      </Link>
    </nav>
  );
}
