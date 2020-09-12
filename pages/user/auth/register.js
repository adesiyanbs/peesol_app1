// import fetch from 'isomorphic-unfetch'
import {useState} from "react";
import {useHistory} from "react-router-dom";
import styles from "../../../styles/register.module.css";
import Head from 'next/head'
import Link from 'next/link'
import Profile from "../account/profile";
import Profilepage from "../../../components/profilepage";
import Router from "next/router";

export default function Register() {
    const [user, setUser] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });

    // {

    //     useState.map(u => <Profilepage key={u.id} {...u} />)

    // }
    const handleChange = (e) => setUser({
        ...user, [e.target.name]: e.target.value
    });
    // const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hey");
        try {

            const res = await fetch(
                "https://schon-api.herokuapp.com/user/auth/register",
                {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {"Content-Type": "application/json"},

                }
            );
            console.log("heyjson");

            const json = await res.json();
            //this example here is how you will save the token in the browser for later useage

            //you can get the token this way
            console.log(json);
            console.log(json.status);
            if (json.status === true) {
                localStorage.setItem(
                    "token",
                    json.data.token
                );
                console.log(localStorage.getItem("token"));
                localStorage.setItem('email', json.data.user.email)
                localStorage.setItem('id', json.data.user.id)
                console.log(localStorage.getItem('id'))
                Router.push("/user/account/dashboard")
                alert("Registration successful Enter Login details!")
            } else {
                console.log("you idiot");
            }

        } catch (e) {
            console.log("An error occurred", e);
        }
    };

    return (

        <div className={styles.entirecontainer}>
            <div className={styles.container}>
                <Head>
                    <title>Schon Peesol Energy | Solar Company</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <h1 className={styles.formh1}>
                    <Link href="/user/auth/login"><a>Login</a></Link> / <b className={styles.red}>Register</b>
                </h1>
                <div className={styles.formcontainer}>
                    <form
                        action="https://schon-api.herokuapp.com/user/account/profile"
                        method="get"
                        onSubmit={handleSubmit}
                        className={styles.form}
                        style={{paddingBottom: '100px'}}
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
                        <br/>
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
                        <br/>
                        <div>
                            <label className={styles.labelphone}>Phonenumber</label> <br></br>
                            <input
                                className={styles.input}
                                placeholder="phonenumber"
                                name="phoneNumber"
                                onChange={handleChange}
                                required
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                            />
                        </div>
                        <br/>
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
                        <br/>
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
                        <button className={styles.button}>Register</button>
                    </form>
                    {/* <h5 className={styles.h5}>Forgot Password? Click Here</h5> */}
                </div>
                <div>
                    <h4 className={styles.signup}>
                        Have an account? <Link href="/user/auth/login"><a><b
                        className={styles.blue}>Login</b></a></Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}
