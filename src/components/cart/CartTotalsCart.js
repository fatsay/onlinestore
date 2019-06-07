import React from 'react';

function CartTotalsCart({value,history}) {
    const {cartSubTotal,cartTax,cartTotal}=value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">

                </div>
                <div className="row">
                    <div className="col-9 text-right">
                        <h5>
                                <span className="text-muted">
                                    Subtotal :
                                </span>
                        </h5>
                        <h5>
                                <span className="text-muted">
                                    Tax :
                                </span>
                        </h5>
                        <h5>
                                <span className="text-muted">
                                    Total :
                                </span>
                        </h5>
                    </div>
                    <div className="col-3 text-right text-muted">
                        <h5>
                            <span>{cartSubTotal} $</span>
                        </h5>
                        <h5>
                            <span>{cartTax} $</span>
                        </h5>
                        <h5>
                            <span>{cartTotal} $</span>
                        </h5>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default CartTotalsCart;