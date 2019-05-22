import React from 'react';
import EmptyCartImg from '../../images/ShoppingCart.png';

function EmptyCart(){
    return (
        <div className="container">
            <div className="text-center text-title" style={{margin:"18%"}}>
               <img src={EmptyCartImg} alt="cart"/>
            </div>
        </div>
    );
}

export default EmptyCart;