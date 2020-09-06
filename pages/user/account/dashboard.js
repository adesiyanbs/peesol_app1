import styles from "../../../styles/dash.module.css";
import Dashcontent from "../../../components/dashboardpage";
import Link from "next/link";
import Head from "next/head";

export default function Dashboardpage() {
  return (
    <>
      <Head>
        <title>Schon Peesol Energy | Solar Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}>
        <img className={styles.logo} src="/main-logo.png" alt="logo" />
        <h5 className={styles.navh5}>Log Out</h5>
      </div>

      <div className={styles.container}>
        <div className={styles.toolbar}>
          <div className={styles.toolbaricon}>
            <Link href="/user/account/dashboard">
              <a>
                <img
                  className={styles.img}
                  src="/dashboard.svg"
                  alt="dashboard"
                />
              </a>
            </Link>
            <br />
            <Link href="/user/account/profile">
              <a>
                <img className={styles.img} src="/user.svg" alt="profile" />
                <br />
              </a>
            </Link>
            <Link href="/user/account/store">
              <a>
                <img className={styles.img} src="/bag.svg" alt="store" />
                <br />
              </a>
            </Link>{" "}
            <img className={styles.img} src="/shopping-cart.svg" alt="" />
          </div>
        </div>

        <div className={styles.body}>
          <Dashcontent />
        </div>
      </div>
    </>
  );
}
