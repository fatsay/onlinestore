import React, {Component} from 'react';
import Product from './Product';
import {ProductConsumer} from "../../context";
import NavBar from '../../bootstrap/NavBar'
import {FormControl, FormGroup} from "react-bootstrap";

class ProductListTv extends Component {
    constructor(props){
        super(props);
        this.state={
            brand:"",
            search:""
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <div className="py-5">
                        <h4 className="mt-2 mb-4 ml-4">
                            <div className="row">
                                <div className="col-3 text-muted align-self-center">
                                    <h4>TV</h4>
                                </div>
                                <div className="col-3 text-muted text-left align-self-center">
                                    <FormGroup controlId="brand">
                                        <FormControl as="select"
                                                     placeholder="select"
                                                     onChange={this.handleChange}>
                                            <option value="">All Brands</option>
                                            <option value="Sony">Sony</option>
                                            <option value="Samsung">Samsung</option>
                                            <option value="LG">LG</option>
                                        </FormControl>
                                    </FormGroup>
                                </div>
                                <div className="col-4 text-muted align-self-center">
                                    <FormGroup controlId="search">
                                        <FormControl
                                            autoFocus
                                            placeholder="Search item"
                                            type="text"
                                            value={this.state.search}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                        </h4>
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    let tempList=[...value.products];
                                    return tempList.map(item=>{
                                        if (this.state.brand==="" && item.category==="tv" && this.state.search===""){
                                            return <Product key={item.id}
                                                            product={item}/>
                                        }
                                        if (this.state.brand===item.company && item.category==="tv" && this.state.search===""){
                                            return <Product key={item.id}
                                                            product={item}/>
                                        }
                                        if (this.state.search!=="" && item.category==="tv" && item.title.toLowerCase().includes(this.state.search.toLowerCase())){
                                            return <Product key={item.id}
                                                            product={item}/>
                                        }
                                        else{
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