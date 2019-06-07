import React from 'react';

function CartItem({item,value}) {
    const {id,title,img,price,total,count}=item;
    const {increment,decrement,removeItem}=value;
    return (
        <div className="row my-2 text-capitalize text-center mt-4">
            <div className="col-md-2 col-lg-2">
                <img src={img} style={{width:'5rem',height:'4rem'}}
                     className="img-fluid" alt="product"/>
            </div>
            <div className="col-md-2 col-lg-2 align-self-center">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-md-2 col-lg-2 align-self-center">
                <span className="d-lg-none">price : </span>
                {price} $
            </div>
            <div className="col-md-2 col-lg-2 my-2 my-lg-0 align-self-center">
                <div className="d-flex justify-content-center">
                    <div>
                            <span className="btn btn-outline-danger mx-1"
                                  onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-outline-primary mx-1">{count}</span>
                        <span className="btn btn-outline-warning mx-1"
                              onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-lg-2 align-self-center">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"/>
                </div>
            </div>
            <div className="col-md-2 col-lg-2 align-self-center">
                <span>{total} $</span>
            </div>
            <hr/>
        </div>
    );
}

export default CartItem