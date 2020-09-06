import Link from 'next/link'
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
                <div>
                    <div className={styles.footersecond}>
                        <div>
                            <img className={styles.img} src="/main-logo.png" alt=""/>
                        </div>
                        <ul>
                            <h3 className={styles.h3}>Pages</h3>
                            <Link href="/"><li className={styles.footersecondlist}><a>Home</a></li></Link>
                            <Link href="/about"><li className={styles.footersecondlist}><a>About Us</a></li></Link>
                            <Link href="/services"><li className={styles.footersecondlist}><a>Services</a></li></Link>
                            <Link href="/contact"><li className={styles.footersecondlist}><a>Contact Us</a></li></Link>
                        </ul>
                        <div>
                            <h3>Resources</h3>
                        </div>
                    </div>
                    <h4 className={styles.footertext}>Copyright © 2020 Schon-pessol</h4>
                </div>
            </div>


        </>
    )
}