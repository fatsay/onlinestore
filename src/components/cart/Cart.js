import React, {Component} from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotalsCart from './CartTotalsCart';
import NavBar from '../../bootstrap/NavBar';
import {Link} from "react-router-dom";

class Cart extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <section>
                    <ProductConsumer>
                        {value =>{
                            const {cart}=value;
                            if (cart.length>0) {
                                return (
                                    <React.Fragment>
                                        <div className="container text-center mb-5 mt-5">
                                            <h2 className="mt-3 mb-5">
                                                <span className="text-muted">
                                                Shopping Bag
                                                </span>
                                            </h2>
                                            <hr/>
                                        <CartColumns/>
                                        <CartList value={value}/>
                                        <hr/>
                                        <div className="text-right">
                                            <Link className="nav-link" to="/shipping">
                                                <button type="button" className="btn btn-outline-primary">
                                                    SHIPPING & PAYMENT
                                                </button>
                                            </Link>
                                        </div>
                                        </div>
                                        <CartTotalsCart value={value} history={this.props.history}/>
                                    </React.Fragment>
                                )}
                            else {
                                return  <EmptyCart/>
                            }
                        }}
                    </ProductConsumer>
                </section>
            </div>
        );
    }
}

export default Cart;