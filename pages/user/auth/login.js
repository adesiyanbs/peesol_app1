// import fetch from 'isomorphic-unfetch'
import { useState } from "react";
import styles from "../../../styles/loginform.module.css";
import Head from "next/head";
import Link from "next/link";
import  Router  from "next/router";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
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
        "token", ""
      );
      //you can get the token this way
      console.log(localStorage.getItem("token"));
      console.log(json);
      console.log(json.status)
      if(json.status === true){
        Router.push("/user/account/dashboard")
      }
      else{
        console.log("you idiot");
      }

    } catch (e) {
      console.log("An error occurred", e);
    }
  };

  return (
    <div  className={styles.entirecontainer}>
      <div className={styles.container}>
        <Head>
          <title>Schon Peesol Energy | Solar Company</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.formh1}>
          Login /{" "}
          <Link href="/user/auth/register">
            <a>
              <b className={styles.red}>Register</b>
            </a>
          </Link>
        </h1>
        <div className={styles.formcontainer}>
          <form
            action="https://schon-api.herokuapp.com/user/account/profile/1"
            method="get"
            onSubmit={handleSubmit}
            className={styles.form}
          >
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
          <h5 className={styles.h5}>Forgot Password? Click Here</h5>
        </div>
        <div>
          <h4 className={styles.signup}>
            Don't have an account?{" "}
            <Link href="/user/auth/register">
              <a>
                <b className={styles.blue}>Register</b>
              </a>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
