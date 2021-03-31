import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Product(props) {
    const { addToCart , isInCart , product } = props;
    const { id , price, title , image_url } = product;

    return (
        <div className="col-8 mx-auto col-md-4 col-lg-4 my-3">
            <div className="card">
                <div>

                    <div className="img-container p-5" >
                        <Link to={`/details?id=${id}`} onClick={() => props.goToDetail(props.product)}>
                            <img src={image_url} alt="product" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={isInCart ? true : false} onClick={() => {
                            addToCart(product)

                        }}>
                            {isInCart ? (<p className="text-capitalize mb-0" disabled> In Cart </p>) : (<i className="fas fa-shopping-cart" />)}
                        </button>
                    </div>
                </div>


                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                </div>
            </div>

        </div>
    )
}



export default Product