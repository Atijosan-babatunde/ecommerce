import React from 'react';
import './style.css';


const Cart = ({ cart, modifyCartProduct }) => {
    const getTotal = () => {
        let total = 0;
        cart.forEach(item => {
            const quantity = Number(item.quantity);
            const price = Number(item.price);
            total = total + (quantity * price);
        });
        return total;
    }


    return (
        <div>

            {
                cart.length > 0 && (
                    <table className="tick">
                        <thead>
                            <tr>
                                
                                <th>
                                    ITEM
                                    </th>
                                  <br/>  
                                   
                                <th>
                                    PRICE
                                    </th>
                                &nbsp;
                                <th>
                                    QUANTITY
                                </th>
                                
                            
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map(item =>
                                <tr className="allow">
                                    <td > {item.title} </td>
                                    &nbsp;
                                    <td>  {item.price * item.quantity} </td>
                                    &nbsp;
                                    <td> {item.quantity} </td>
                                    
                             
                                    <td>
                                        <i
                                            className="fas fa-plus"
                                            onClick={() => modifyCartProduct("inc", item.id)} />
                                    </td>
                                    &nbsp;
                                    <td>
                                        <i
                                            className="fas fa-minus"
                                            onClick={() => modifyCartProduct("dec", item.id)} />
                                    </td>
                                </tr>
                            )}
                        
                        </tbody>
                        <h5>
                       <span className="text-title">total :</span>
                       <strong>$ {getTotal()}</strong>
                     </h5>
                        
                    </table>

                    
                )
            }
        </div>
    )

}

export default Cart;