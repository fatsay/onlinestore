import React, {Component} from 'react';
import NavBar from "../../bootstrap/NavBar";
import MyFooter from '../../bootstrap/MyFooter'
import {Col, Row} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="box-2">
                        <div className="box-header">
                            <span className="ml-3">ABOUT US</span>
                            <hr/>
                        </div>
                        <div className="ml-2 text-muted">
                            <Row>
                                <Col md={10}>
                                    <p className="text-danger">COMPANY INFORMATION</p>
                                    <p>Bestelectronics.com is an online shop with electronics. Our store opened in 2009 and offers the best shopping experience with daily new arrivals, a wide selection, and last but not least good offers.</p>

                                    <p>We have a fast delivery of 3-5 working days and a free return policy of up to 30 days.</p>
                                    <p>Bestelectronics.com uses industry standard Secure Socket Layer technology (SSL) ensuring a safe and comfortable shopping experience, so much so that our customers have given us 9.2 out of 10 stars on Trustpilot.</p>

                                    <p className="text-danger">CONPANY DETAILS</p>

                                    <p>Our HQ address is:</p>
                                    <p> Best Electronics AB</p>
                                    <p>Trelleborgs gatan 7b</p>
                                    <p>214 35  Malmö, Sweden.</p>

                                        <p>Access and use of bestelectronics.com are regulated by the conditions of use ('General Conditions of Use'). Access and use of this Website presupposes that you have read, understood and agreed to these obligatory General Conditions of Use, as well as the Privacy Policy section.
                                    </p>
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

export default About;