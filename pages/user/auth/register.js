// import fetch from 'isomorphic-unfetch'
import { useState } from "react";
import styles from "../../../styles/register.module.css";
import Head from 'next/head'
import Link from 'next/link'
export default function Login() {
        const [user, setUser] = useState({
          firstName:"",
          lastName:"",
          email: "",
          password: "",
          phoneNumber:"" 
        });
        const handleChange = (e) => setUser({ 
            ...user, [e.target.name]: e.target.value
            });

        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("hey");
            try {
            console.log("heyd");

      const res = await fetch(
        "https://schon-api.herokuapp.com/user/auth/login",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("heyjson");

      const json = await res.json();
      //this example here is how you will save the token in the browser for later useage
      localStorage.setItem(
        "token",
        " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE1OTkwOTU1NTQsImV4cCI6MTU5OTA5OTE1NH0.rF89AuN7Dv6FQN85meKWItLjROzS5lYNHtyl5aW2bdk"
      );
      //you can get the token this way
      console.log(localStorage.getItem("token"));
      console.log(json);
    } catch (e) {
      console.log("An error occurred", e);
    }
  };

  return (
      
    <div className={styles.container}>
            <Head>
                <title>Schon Peesol Energy | Solar Company</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
      <h1 className={styles.formh1}>
       <Link href="/user/auth/login"><a>Login</a></Link> / <b className={styles.red}>Register</b>
      </h1>
      <div className={styles.formcontainer}>
        <form
          action="https://schon-api.herokuapp.com/user/account/profile/1"
          method="get"
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div>
            <label className={styles.label}>Firstname</label> <br></br>
                <input
                className={styles.input}
                placeholder="firstname"
                name="firstName"
                onChange={handleChange}
                required
                type="text"
            />
            </div>
            <br />
            <div>
            <label className={styles.label}>Lastname</label> <br></br>
            <input
              className={styles.input}
              placeholder="lastname"
              name="lastName"
              onChange={handleChange}
              required
              type="text"
            />
           </div>
           <br />
           <div>
            <label className={styles.labelphone}>Phonenumber</label> <br></br>
                <input
                className={styles.input}
                placeholder="phonenumber"
                name="phoneNumber"
                onChange={handleChange}
                required
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                />
            </div>
            <br />
            <div>
            <label className={styles.labelemail}>Email</label> <br></br>
            <input
              className={styles.input}
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              required
              type="email"
            />
            </div>
          <br />
          <div>
            <label className={styles.label}>Password</label>
            <br></br>
            <input
              className={styles.input}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
              type="password"
            />
          </div>
          <button className={styles.button}>Log In</button>
        </form>
        {/* <h5 className={styles.h5}>Forgot Password? Click Here</h5> */}
      </div>
      <div>
        <h4 className={styles.signup}>
           Have an account? <Link href="/user/auth/login"><a><b className={styles.blue}>Login</b></a></Link>
        </h4>
      </div>
    </div>
  );
}
