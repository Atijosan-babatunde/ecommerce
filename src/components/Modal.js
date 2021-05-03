import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';



function Modal(props) {
    return (

        <div className="modalContainer">
            <div className="container">
                <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                        <h5>Item added to the cart</h5>
                        <img src={props.image_url} className="img-fluid" alt="product" />
                        <h5>{props.title}</h5>
                        <h5 className="text-muted">price : $ {props.price}</h5>

                        <Link to="/">
                            <div className="ButtonContainer" onClick={() => closeModal()}>
                                <button >store</button>
                            </div>
                        </Link>
                        <Link to="/cart">
                            <div className="ButtonContainer" onClick={() => closeModal()}>
                                <button >go to the cart</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default Modal