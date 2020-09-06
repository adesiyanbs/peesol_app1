import styles from '../styles/dashcontent.module.css'
export default function Dashcontent(){
    return(
        <>
            <div className={styles.topctn}>
                <div>
                    <h2 className={styles.topctnh2}>DashBoard</h2>
                    <p className={styles.topctnp}>Welcome Chief</p>
                </div>
                <div>
                    <button className={styles.button}>Manage Cards</button>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src="/delivery-box.svg" alt="delivery"/>
                    </div>
                    <div >
                     <h2>6</h2>
                     <p  className={styles.cardp}>Orders</p>
                    </div>
                </div>
                
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src="/delivery-box.svg" alt="delivery"/>
                    </div>
                    <div >
                     <h2>6</h2>
                     <p  className={styles.cardp}>Single Order</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src="/delivery-box.svg" alt="delivery"/>
                    </div>
                    <div >
                     <h2>6</h2>
                     <p  className={styles.cardp}>Delivered Orders</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src="/delivery-box.svg" alt="delivery"/>
                    </div>
                    <div >
                     <h2>6</h2>
                     <p  className={styles.cardp}>Orders</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src="/delivery-box.svg" alt="delivery"/>
                    </div>
                    <div>
                     <h2>9</h2>
                     <p  className={styles.cardp}>Pending Orders</p>
                    </div>
                </div>
            </div>
        </>
    )
}