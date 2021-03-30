import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Product from './Product.js';
import Title from './Title';



function ProductList(){
 const [state, setState]=
 React.useState({products:[]});
 const getProducts  = gql`
query{
    products{
        id
        title
        image_url
        price(currency:USD)
        product_options{
            title
        }
    }
}`;
const {data} = useQuery(getProducts);
console.log(data);

useEffect(()=>{
    if(data){
        console.log(data);
        if(data.products) setState({products:data.products});
    };
},
[data]);
      console.log(state.products)
        return (
            
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="product"/>
                    <div className="row">
                      {state.products.map(({id, image_url, title, product_options, price})=>(
                          <Product id={id} image_url={image_url} title={title} product_options={product_options} price={price}/>
                          
                          
                      ))}
                    </div>
                </div>
            </div>
           
        )
  
}
export default ProductList