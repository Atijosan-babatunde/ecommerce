import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import './style.css';
import { useLocation } from 'react-router-dom';
import { getProducts } from './graphQl';

function Details(props) {
    const { details, cart, addToCart } = props;
    const [detailsFromUrl, setDetailsFromUrl] = React.useState({});
    let curentId = useLocation()?.search;
    curentId = curentId === undefined ? null : curentId.split("=")[1];
    const isProductInCart = cart.find(item => item.id === (details || detailsFromUrl).id);

    const { data } = useQuery(getProducts);

    useEffect(() => {
        if (curentId && !details?.id) {
            if (data?.products) {
                const currentProduct = data.products.find(item => String(item.id) === String(curentId));
                console.log(currentProduct)
                setDetailsFromUrl(currentProduct);
            }
        }
        //eslint-disable-next-line
    }, [curentId, data]);

    console.log(detailsFromUrl)

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{(details || detailsFromUrl).title}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={(details || detailsFromUrl).image_url} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>{(details || detailsFromUrl).title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2 ">
                        Made by : <span className="text-uppercase"> LUMIN-SKIN
                     </span></h4>
                    <h4 className="text-blue">
                        <strong>
                            Price: <span>$</span>{(details || detailsFromUrl).price}
                        </strong>
                    </h4>

                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        Look older than you feel?
                     </p>

                    {/* <p classNames="text-muted lead">{details.product_options}</p>  */}
                    <div>
                        {/* <Link to="/Cart"> */}
                        <button
                            onClick={() => !isProductInCart && addToCart((details || detailsFromUrl))}
                            className="add"
                            cart
                        >
                            {isProductInCart ? "In Cart" : "add to cart"}
                        </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Details