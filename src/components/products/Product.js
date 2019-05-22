import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import '../App.css';

class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <div className="mx-auto my-sm-2">
                <div className="card">
                    <ProductConsumer>
                        {value =>(
                            <div className="img-container p-5"
                                 onClick={()=>value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"/>
                                </Link>
                                <button type="button" className="btn-card btn-outline-primary"
                                        disabled={inCart ? true : false}
                                        onClick={()=>{value.addToCart(id);
                                            //value.openModal(id)
                                        }}
                                >
                                    {inCart?
                                        (<p className="text-capitalize mb-0" disabled>
                                                {" "}
                                                in Cart
                                            </p>
                                        ) : (<i className="fas fa-cart-plus"/> )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                    {/* Card footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-capitalize mb-0">
                            {price}
                            <span className="mr-1"> SKr</span>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;