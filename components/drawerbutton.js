import styles from '../styles/button.module.css'

export default function Button (){
    return(
        <button>
            <div className={styles.buttonlines}/>
            <div className={styles.buttonlines}/>
            <div className={styles.buttonlines}/>
            
        </button>
    )
}