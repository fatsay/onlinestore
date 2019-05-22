import React, {Component} from 'react';
import Product from './Product';
import {ProductConsumer} from "../context";

class ProductListMobile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <span>Title here</span>
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map(product=>{
                                        if (product.category==="Mobile") {
                                            return <Product key={product.id}
                                                            product={product}/>
                                        }
                                        else {
                                            return null
                                        }
                                    })
                                }
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductListMobile;