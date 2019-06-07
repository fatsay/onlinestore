import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import CartTotals from './CartTotals';

class PayPal extends Component {

    render() {
        return (
            <div>
                <section>
                    <ProductConsumer>
                        {value =>{
                                return (
                                    <React.Fragment>
                                        <CartTotals value={value} history={this.props.history}/>
                                    </React.Fragment>
                                )
                        }}
                    </ProductConsumer>
                </section>
            </div>
        );
    }
}

export default PayPal;