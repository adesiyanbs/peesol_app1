import React, { Component } from "react";
import styles from "../styles/storepage.module.css";
import Modal from "../components/modal/modal";

// import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: 0,
      post: [
        
      ]
    };
    this.getModal = this.getModal.bind(this);
  }
  
    

      
  
  // singleView(id) {
  //   localStorage.setItem("productID", 1);
  //   // this.props.history.push('/Second')
  // }
  

  getModal = (value) => {
    this.setState({ showModal: value });
  };

  hideModal = (value) => {
    this.setState({ showModal: 0 });
  };
  
  render() {
    const getModal = async (e) => {
      e.prevent.default();
      console.log('hey')
    
      try{
        console.log("heydd")

        const res = await fetch(
          "https://localhost:3000/user/account/store",
          {
            method:"GET",
            body: JSON.stringify(post) 
          }
        )
        console.log("hey json");

        const json = await res.json()

        localStorage.setItem(
          "ProductId", 1
        )
        console.log(json)
      }
      catch (e){
        console.log("an occurrrrr", e)
      }
    }
    return (
      <div className={styles.card}>
        {this.props.data.map((data, key) => (
          
            <div className={styles.card}>
              <div className={styles.cards} key={key}>
                <div className={styles.imgdiv}>
                  <img className={styles.img} src={data.img} alt="products" />
                </div>
                <div className={styles.textdiv}>
                  <h2 className={styles.h2}>{data.name}</h2>
                </div>
                <button onClick={() => this.getModal(data.id)} className={styles.button}> View </button>

                
              </div>
              <Modal
                  show={this.state.showModal === data.id}
                  onHide={() => this.hideModal(data.id)}
                  name={data.name}
                  description={data.description}
                  image={data.img}
                  price={data.price}
                />
            </div>
            
          
        ))}
      </div>
    );
  }
}

export default Product;
