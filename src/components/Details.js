import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Details(props){
    return(
        <div className="container py-5">
        <div className="row">
           <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
               <h1>{props.title}</h1>
           </div>
        </div>

        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <img src={props.image_url} className="img-fluid" alt="product"/>
            </div>
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>{props.title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2 ">
                        Made by : <span className="text-uppercase"> LUMIN-SKIN 
                     </span></h4>
                     <h4 className="text-blue">
                        <strong>
                            Price: <span>$</span>{props.price}
                        </strong>
                     </h4>

                     <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        Look older than you feel?
                     </p>

                     <p classNames="text-muted lead">{props.product_options}</p> 
                     <div>
                       <Link to="/Cart">
                           <button className="add"
                              cart disabled={props.product_options ? true : false}onClick= {()=>{
                                 
                              }}
                              >
                              {props.product_options ? "inCart" : "add to cart"}
                            </button>
                       </Link> 
                     </div>
            </div>
        </div>
     </div>
    )
} 



export default Details 