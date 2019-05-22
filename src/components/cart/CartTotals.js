import React from 'react';
import PayPalButton from './PayPalButton';

function CartTotals({value,history}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart}=value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                        text-capitalize text-right">
                        <button type="button" className="btn btn-outline-danger mb-4"
                                onClick={()=>clearCart()}>
                            CLEAR CART
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 text-right text-title">
                        <h5>
                                <span className="text-title">
                                    subtotal :
                                </span>
                        </h5>
                        <h5>
                                <span className="text-title">
                                    tax :
                                </span>
                        </h5>
                        <h5>
                                <span className="text-title">
                                    total :
                                </span>
                        </h5>
                    </div>
                    <div className="col-1 text-right">
                        <h5>
                            <strong>{cartSubTotal} $</strong>
                        </h5>
                        <h5>
                            <strong>{cartTax} $</strong>
                        </h5>
                        <h5>
                            <strong>{cartTotal} $</strong>
                        </h5>
                    </div>
                </div>

                    <div className="col-13 mt-3 text-right">
                        <PayPalButton total={cartTotal}
                                      clearCart={clearCart}
                                      history={history}/>
                    </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotals;