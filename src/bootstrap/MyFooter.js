import React, {Component} from 'react';
import {Row,Col} from "react-bootstrap";
import Delivery from '../images/Delivery.png';
import Returns from '../images/Return.png';
import CustomerService from '../images/CustomerService.png';
class MyFooter extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <Row>
                        <Col md={9}>
                            <span className="text-muted">@2019 Best Electronics AB</span>
                        </Col>
                        <Col md={1}>
                            <img src={CustomerService} alt="customer"/>
                        </Col>
                        <Col md={1}>
                            <img src={Delivery} alt="delivery"/>
                        </Col>
                        <Col md={1}>
                            <img src={Returns} alt="returns"/>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}
export default MyFooter;