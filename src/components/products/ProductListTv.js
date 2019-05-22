import React, {Component} from 'react';
import Product from './Product';
import {ProductConsumer} from "../../context";
import NavBar from '../../bootstrap/NavBar'

class ProductListTv extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <div className="py-5">
                        <h4 className="mt-2 mb-4 ml-4">
                                                <span className="text-title">
                                                Tv
                                                </span>
                        </h4>
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map(product=>{
                                        if (product.category==="tv") {
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

export default ProductListTv;