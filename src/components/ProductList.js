import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { getProducts } from './graphQl';
import Product from './Product.js';
import Title from './Title';

function ProductList({ addToCart, setDetail , cart }) {
    const [state, setState] = React.useState({ products: [] });
    const { data } = useQuery(getProducts);

    useEffect(() => {
        if (data) {
            if (data.products) setState({ products: data.products });
        };
    },
        [data]);

    return (

        <div className="py-5">
            <div className="container">
                <Title name="our" title="product" />
                <div className="row">
                    {state.products.map(product => (
                        <Product
                            addToCart={addToCart}
                            isInCart={cart.find(item => item.id === product.id)  !== undefined}
                            goToDetail={setDetail}
                            product={product} />

                    ))}
                </div>
            </div>
        </div>

    )

}
export default ProductList