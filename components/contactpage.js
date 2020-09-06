import styles from '../styles/contact.module.css';

export default function Contactpage (){
    return(
        <>
            <div className={styles.address}>
                <h3>Office Address</h3>
                <img className={styles.img} src="/pin.svg" alt="location"/>
                <p>
                Suite 79, Lekan Salami Shopping Complex <br/>
                Opposite Ibadan Recreation Club, <br/>
                Adamasingba, Ibadan, <br/>
                Nigeria. <br/>
                Tel : 07038019000 & 08055532300
                </p>
            </div>

            <div className={styles.contact}>
                <div className={styles.formhead}>
                    <h2 className={styles.formheadh2}>Let's <b className={styles.red}>Do</b> Business</h2>
                    <p className={styles.formheadp}>Get in touch with us</p>
                </div>
                <div>
                    <form action="" className={styles.form}>
                        <div className={styles.forminput} >
                            <label htmlFor="">Name</label><br/>
                            <input
                            className={styles.contactinput} 
                            placeholder="name"
                            type="text"/>
                        </div>

                        <div className={styles.forminput}>
                            <label htmlFor="">Email</label><br/>
                            <input 
                            className={styles.contactinput}
                            placeholder="email"
                            type="email"/>
                        </div>
                        <div className={styles.forminput}>
                            <label htmlFor="">Message</label><br/>
                            <textarea 
                            className={styles.contactmessage}
                            name=""  
                            cols="50" 
                            rows="20"
                            placeholder="message"
                            ></textarea>
                            
                            
                        </div>
                        <button className={styles.button}>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}