import styles from "../styles/first.module.css";
import Link from 'next/link'

export default function Firstpage() {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.top}>
          <h2 className={styles.toph2}>
            The Future In <b className={styles.red}>Renewable Energy</b>
          </h2>
          <p>
            We supply homes and business with renewable energy solutions that
            deliver financial savings and carbon reductions.
          </p>
        </div>
        <div className={styles.btndiv}>
          <Link href="/product"><a><button className={styles.shopbtn}>Product</button></a></Link>
          <Link href="/contact"><a><button className={styles.contactbtn}>Contact Us</button></a></Link>
        </div>

        {/* mission section */}
        <div className={styles.mission}>
          <h2 className={styles.missionh2}>
            Our <b className={styles.red}>Mission</b>
          </h2>
          <p className={styles.missionp}>
            Schon Peesol Energy RC:912767 was established in 2010 in order to
            supply alternative energy solutions for its customers both in
            Nigeria and abroad. Schon Peesol Energy is a company that is active
            in the promotion, planning and implementation of alternative energy
            systems. Since its inception, the company has made its goal to be
            the standard setter for the alternative energy industry and to bring
            clean, green electricity both to the urban environment and the
            periphery. We operate across Nigeria and around the globe.
          </p>
        </div>

        {/* products section */}
        <div className={styles.product}>
          <h2>
            Our <b className={styles.red}>Products</b>
          </h2>
          <div className={styles.productcard}>
            <div className={styles.productcards}>
              <img className={styles.img} src="/XW3.png" alt="XW3" />
              <h2 className={styles.textdivh2}>XW3</h2>
            </div>
            <div className={styles.productcards}>
              <img className={styles.img} src="/icell.jpg" alt="icell" />
              <h2 className={styles.textdivh2}>iCell</h2>
            </div>
            <div className={styles.productcards}>
              <img className={styles.img} src="/sukam2.jpg" alt="sukam" />
              <h2 >Sukam 2</h2>
            </div>
            <div className={styles.productcards}>
              <img className={styles.img} src="/mulitu-power1.jpg" alt="mulitupower" />
              <h2 >Mulitu Power</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
