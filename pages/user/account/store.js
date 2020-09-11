import Link from "next/link";
import styles from "../../../styles/dash.module.css";
import Storepage from "../../../components/storepage";
import Head from 'next/head'
import React, { Component } from "react";
import { useState } from "react";
import { render } from "react-dom";
 
  class Store extends Component {
    state = {
      post: [
        {
          id: 1,
          name: "AE",
          description: "Lorem plenty words go here",
          img: "/AE.jpg",
          price: 100
        },
      
        {
          id: 2,
          name: "iCell",
          description: "Lorem plenty words go here",
          img: "/icell.jpg",
          price: 100
        },
      
      
        {
          id: 3,
          name: "Mulitu Power",
          description: "Lorem plenty words go here",
          img: "/mulitu-power1.jpg",
          price: 100
        },
      
        {
          id: 4,
          name: "Outback Inverter",
          description: "Lorem plenty words go here",
          img: "/outback-inverter.jpg",
          price: 100
        },
      
      
        {
          id: 5,
          name: "Outback Inverter",
          description: "Lorem plenty words go here",
          img: "/outback2.jpg",
          price: 100
        },
    
        {
          id: 6,
          name: "XW3",
          description: "Lorem plenty words go here",
          img: "/XW3.png",
          price: 100
        },
    
        {
          id: 7,
          name: "Sukam2",
          description: "Lorem plenty words go here",
          img: "/sukam2.jpg",
          price: 100
        },
    
        {
          id: 8,
          name: "TBB",
          description: "Lorem plenty words go here",
          img: "/tbb2.jpg",
          price: 100
        },
    
        {
          id: 9,
          name: "XW3-2",
          description: "Orange are orange",
          img: "/XW3.png",
          price: 100
        }
      ]
    };
  
    
 
  render(){
    return (
      <>
        <Head>
          <title>Schon Peesol Energy | Solar Company</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.nav}>
          <img className={styles.logo} src="/main-logo.png" alt="logo" />
          <h5 className={styles.navh5}>Log Out</h5>
        </div>
  
        <div className={styles.container}>
          <div className={styles.toolbar}>
            <div className={styles.toolbaricon}>
              <Link href="/user/account/dashboard">
                <a>
                  <img
                    className={styles.img}
                    src="/dashboard.svg"
                    alt="dashboard"
                  />
                </a>
              </Link>
              <br />
              <Link href="/user/account/profile">
                <a>
                  <img className={styles.img} src="/user.svg" alt="profile" />
                  <br />
                </a>
              </Link>
              <Link href="/user/account/store">
                <a>
                  <img className={styles.img} src="/bag.svg" alt="store" />
                  <br />
                </a>
              </Link>
              <img className={styles.img} src="/shopping-cart.svg" alt="" />
            </div>
          </div>
  
          <div className={styles.body}>
            <h2>Store</h2>
            <div className={styles.storebody}>
            <Storepage data={this.state.post} />
            </div>
          </div>
        </div>
      </>
    );
  }
  
}

export default Store