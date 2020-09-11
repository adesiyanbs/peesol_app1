import React, { Component } from "react";
import styles from '../../styles/modal.module.css'
// import "./Modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div className={styles.modal}>
            <img className={styles.img} src={this.props.image}/>
            <div>
            <h1>{this.props.name}</h1>
            <h1>{this.props.description}</h1>
            <h1>{this.props.price}</h1>
            <button>Add to Cart</button>
            </div>
            
            <button className={styles.closebtn} onClick={this.props.onHide}>Close Modal</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
