import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import {Link} from "react-router-dom";
import NavBar from "../../bootstrap/NavBar";

class Details extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                <ProductConsumer>
                    {(value)=>{
                        //from data.js this variables id and company....
                        const {id,company,img,info,price,title,inCart}=
                            value.detailProduct;
                        return(
                            <div className="container py-5">
                                {/* title*/}
                                <div className="row">
                                    <div className="col-10 mx-auto
                                text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/* end title*/}
                                {/* product info*/}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src={img} className="img-fluid" alt="product"/>
                                    </div>
                                    {/* Product text*/}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h4>model : {title}</h4>
                                        <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by : <span className="text-uppercase">
                                        {company}
                                    </span>
                                        </h5>
                                        <h5 className="text-blue">
                                            <strong>
                                                price : {price} $
                                            </strong>
                                        </h5>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Info about product
                                        </p>
                                        <p className="text-muted lead">{info}</p>
                                        {/* Buttons*/}
                                        <div>
                                            {value.detailProduct.category==="mobile" &&
                                            <Link to="/mobile">
                                                <button type="button" className="btn btn-outline-info">
                                                    Back to products
                                                </button>
                                            </Link>
                                            }
                                            {value.detailProduct.category==="tv" &&
                                            <Link to="/tv">
                                                <button type="button" className="btn btn-outline-info">
                                                    Back to products
                                                </button>
                                            </Link>
                                            }
                                            {value.detailProduct.category==="laptop" &&
                                            <Link to="/laptop">
                                                <button type="button" className="btn btn-outline-info">
                                                    Back to products
                                                </button>
                                            </Link>
                                            }
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning m-3"
                                                disabled={inCart?true:false}
                                                onClick={()=>{
                                                    value.addToCart(id);
                                                    //value.openModal(id);
                                                }}
                                            >
                                                {inCart?"inCart":"Add to cart"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
                </div>
            </div>

        );
    }
}

export default Details;