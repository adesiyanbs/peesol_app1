import styles from "../styles/product.module.css";

export default function Productpage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cards}>
            <div className={styles.imgdiv}>
              <img className={styles.img} src="/icell.jpg" alt="icell" />
            </div>
            <div className={styles.textdiv}>
              <h2 className={styles.textdivh2}>Inverter iCell</h2>
              
             
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imgdiv}>
              <img className={styles.img} src="/AE.jpg" alt="AE" />
            </div>
            <div className={styles.textdiv}>
              <h2 className={styles.textdivh2}>AE</h2>
              
              
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imgdiv}>
              <img className={styles.img} src="/XW3.png" alt="XW3" />
            </div>
            <div className={styles.textdiv}>
              <h2 className={styles.textdivh2}>XW3-1</h2>
              
              
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imgdiv}>
              <img className={styles.img} src="/sukam2.jpg" alt="sukam2" />
            </div>
            <div className={styles.textdiv}>
              <h2 className={styles.textdivh2}>Sukam 2</h2>
              
              
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imgdiv}>
              <img
                className={styles.img}
                src="/mulitu-power1.jpg "
                alt="mulitu-power1"
              />
            </div>
            <div className={styles.textdiv}>
              <h2 className={styles.textdivh2}>Mulitu Power</h2>
              
              
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imgdiv}>
              <img className={styles.img} src="/outback2.jpg" alt="outback2" />
            </div>
            <div className={styles.textdiv}>
              <h2 className={styles.textdivh2}>Outback</h2>
             
              
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imgdiv}>
              <img
                className={styles.img}
                src="/outback-inverter.jpg"
                alt="outback-inverter"
              />
            </div>
            <div className={styles.textdiv}>
              <h2 className={styles.textdivh2}>Outback Inverter</h2>
              
              
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imgdiv}>
              <img className={styles.img} src="/XW3.png" alt="XW3" />
            </div>
            <div className={styles.textdiv}>
              <h2 className={styles.textdivh2}>XW3-2</h2>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
