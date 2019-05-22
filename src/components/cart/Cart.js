import React, {Component} from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';
import NavBar from '../../bootstrap/NavBar';

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
                                                <span className="text-title">
                                                Your Items
                                                </span>
                                            </h2>
                                        <CartColumns/>
                                        <CartList value={value}/>
                                        <hr/>
                                        </div>
                                        <CartTotals value={value} history={this.props.history}/>
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