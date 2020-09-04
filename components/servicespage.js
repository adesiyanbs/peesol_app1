import styles from "../styles/services.module.css";

export default function Servicespage() {
  return (
    <>
      <div className={styles.servicestop}>
        <h1 className={styles.servicestoph1}>OUR SERVICES</h1>
        <p className={styles.servicestopp}>
          Our solutions provide clean energy because they are non-pollutant and
          non contributor to greenhouse effects and global warming. Our
          solutions are designed such that they require less maintenance than
          traditional generators.site. Alternatively, when you select a text box
          a settings menu will appear.
        </p>
      </div>

      <div className={styles.servicesmidcontainer}>
        <div className={styles.servicesmid}>
          <div className={styles.servicesmidleft}>
            <h2>Our Offer</h2>
            <p>
              Schön Peesol Energy provides its clients with complete and
              comprehensive support including consultation regarding the most
              suitable solution, training and professional services.
            </p>
          </div>

          <div className={styles.servicesmidright}>
            <h2>Our Style</h2>
            <p>
              Schön Peesol Energy’s systems use only the finest components that
              aremanufactured to the highest of standards and strict quality
              assurance procedures.
            </p>
          </div>
        </div>
        {/* <img src="/serviceslaptop.jpg" alt="services" /> */}
      </div>
    </>
  );
}
