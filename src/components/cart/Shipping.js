import React, {Component} from 'react';
import '../../App.css';
import {Button, Col, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import NavBar from "../../bootstrap/NavBar";
import MyFooter from'../../bootstrap/MyFooter';
import NumImg from '../../images/Number1.png';

class Shipping extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            lastName:"",
            address:"",
            postCode:"",
            city:"",
            country:"Sweden",
            mobile:"",
            email:"",
            confirmEmail:""
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validateForm=this.validateForm.bind(this);

    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    validateForm() {
        return this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
            this.state.email===this.state.confirmEmail &&
            this.state.name.match(/^[A-Za-zäöåÄÖÅ\s]+$/) &&
            this.state.lastName.match(/^[A-Za-zäöåÄÖÅ\s]+$/) &&
            this.state.address.match(/^[A-Za-z\s0-9]+$/) &&
            this.state.postCode.match(/^[0-9]*$/) &&
            this.state.postCode.length===5 &&
            this.state.city.match(/^[A-Za-zäöåÄÖÅ\s]+$/) &&
            this.state.mobile.match(/^[0-9]*$/) &&
            this.state.mobile.length===10
    }
    handleSubmit = event => {
        //store the data in local storage
        event.preventDefault();
        localStorage.setItem('shippingInfo',JSON.stringify(this.state));
        this.props.history.push('/payment');
    };

    render() {
        return (
            <div>
                <NavBar/>
                <div className='container'>
                    <div className="box-3">
                        <div className="box-header">
                            <img src={NumImg} alt="num1" className="ml-2"/>
                            <span className="ml-3">BILLING & SHIPPING INFORMATION</span>
                            <hr/>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <FormGroup controlId="name">
                                        <FormLabel>First name *</FormLabel>
                                        <FormControl
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="lastName">
                                        <FormLabel>Last name *</FormLabel>
                                        <FormControl
                                            value={this.state.lastName}
                                            onChange={this.handleChange}
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="address">
                                        <FormLabel>Address *</FormLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup controlId="postCode">
                                                <FormLabel>Post code *</FormLabel>
                                                <FormControl
                                                    value={this.state.postCode}
                                                    onChange={this.handleChange}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup controlId="city">
                                        <FormLabel>City *</FormLabel>
                                        <FormControl
                                            value={this.state.city}
                                            onChange={this.handleChange}
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup controlId="country">
                                        <FormLabel>Country *</FormLabel>
                                        <FormControl
                                            disabled
                                            value={this.state.country}
                                            onChange={this.handleChange}
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="mobile">
                                        <FormLabel>Mobile *</FormLabel>
                                        <FormControl
                                            value={this.state.mobile}
                                            onChange={this.handleChange}
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="email">
                                        <FormLabel>Email *</FormLabel>
                                        <FormControl
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            type="email"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="confirmEmail">
                                        <FormLabel>Confirm email *</FormLabel>
                                        <FormControl
                                            value={this.state.confirmEmail}
                                            onChange={this.handleChange}
                                            type="email"
                                        />
                                    </FormGroup>
                                    <Row>
                                        <Col>
                                            <div className="info-span2">
                                                <FormLabel>* Required field</FormLabel>

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8}>

                                        </Col>
                                        <Col md={4}>
                                            <Button
                                                variant='outline-primary'
                                                block
                                                disabled={!this.validateForm()}
                                                type="submit"
                                            >
                                                NEXT
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
                <MyFooter/>
            </div>
        );
    }
}

export default Shipping;