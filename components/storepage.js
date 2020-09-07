import styles from "../styles/storepage.module.css";

export default function Storepage({id, name, description, img, price }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card} >
          <div className={styles.cards} id={id}>
            <div className={styles.imgdiv}>
              <img className={styles.img} src={img} alt="icell" />
            </div>
            <div className={styles.textdiv}>
              <h2>{name}</h2>
              <p>
               {description}
              </p>
              <button className={styles.button}>View </button>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}
