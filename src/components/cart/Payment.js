import React, {Component} from 'react';
import NavBar from '../../bootstrap/NavBar';
import MyFooter from '../../bootstrap/MyFooter';
import {Row, Col} from "react-bootstrap";
import '../../App.css';
import PayPal from './PayPal'
import Invoice from './Invoice'
import NumImg2 from '../../images/Number2.png';

class Payment extends Component {
    constructor(props){
        super(props);
        this.state= {
            paymentMethod: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            paymentMethod:e.currentTarget.value
        });
    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="box-2">
                        <div className="box-header">
                            <img src={NumImg2} alt="nun2" className="ml-2"/>
                            <span className="ml-3">PAYMENT OPTION</span>
                            <hr/>
                        </div>
                        <div className="payment-option ml-2">
                            <Row>
                                <Col md={3}>
                                    <input type="radio"
                                           value="payPal"
                                           checked={this.state.paymentMethod === "payPal"}
                                           onChange={this.handleChange}/> PayPal
                                </Col>
                                <Col md={3}>
                                    <input type="radio"
                                           value="invoice"
                                           checked={this.state.paymentMethod === "invoice"}
                                           onChange={this.handleChange}/> Invoice
                                </Col>
                                <Col md={6}>
                                    {this.state.paymentMethod==="payPal" &&
                                    <PayPal/>
                                    }
                                    {this.state.paymentMethod==="invoice" &&
                                    <Invoice/>
                                    }
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </div>
        );
    }
}

export default Payment;