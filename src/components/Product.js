import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Product(props) {
    return (

        <div className="col-8 mx-auto col-md-4 col-lg-4 my-3">
            <div className="card">
                <div>

                    <div className="img-container p-5" >
                        <Link to="/details">
                            <img src={props.image_url} alt="product" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={props.product_options ? true : false} onClick={() => {


                        }}>
                            {props.product_options ? (<p className="text-capitalize mb-0" disabled>{" "} <i className="fas fa-shopping-cart" /></p>) : (<i className="fas fa-shopping-cart" />)}
                        </button>
                    </div>
                </div>


                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {props.title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {props.price}
                    </h5>
                </div>
            </div>
           
        </div>


    )
}



export default Product