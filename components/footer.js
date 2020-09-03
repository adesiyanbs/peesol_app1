import styles from '../styles/footer.module.css'

export default function Footer(){
    return(
        <>
            <div>
                <div className={styles.footertop}>
                    <div className={styles.footertopcnt}>
                        <div className={styles.footertoph2}>
                            <h2>Ready To Do <br></br> Business?</h2>
                        </div>
                        <button className={styles.footertopbtn}>Get In Touch</button>
                    </div>
                </div>
                <div></div>
            </div>


        </>
    )
}