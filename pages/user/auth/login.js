import {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import styles from '../../../styles/loginform.module.css'

export default function Login (){
   

    const [email, password]= useState([{
        email: '',
        password:''
    }])
    Login.getInitialProps = async () =>{
        const res = await fetch('https://schon-api.herokuapp.com//user/auth/login', 
        {
            method: "POSTS",
            headers: { "Content-Type": "application/json" },
            body:{ 
                email: email,
                password: password
    
             }
          })
        const result = await res.json(); 

        console.log(result)
        }
        
return(
       <div className={styles.container}>
            <h1 className={styles.formh1}>Login / Register</h1>
            <div className={styles.formcontainer}>
                <form 
                className={styles.form}
                action="">
                    <div>
                        <label className={styles.label}>Username</label> <br></br>
                        <input 
                        className={styles.input}
                        placeholder="Username"
                        type="text"/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.label}>Password</label><br></br>
                        <input 
                        className={styles.input}
                        placeholder="Password"
                        type="password"/>
                    </div>
                    <button className={styles.button}>Log In</button>
                </form>
            </div>
       </div>
    )
}