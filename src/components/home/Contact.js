import React, {Component} from 'react';
import NavBar from '../../bootstrap/NavBar';
import MyFooter from '../../bootstrap/MyFooter'
import {Button, Col, FormControl, FormGroup, FormLabel, Row} from 'react-bootstrap';
import axios from "axios";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            orderNumber:"",
            subject:"",
            message:""
        };
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validateForm() {
        return this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
            this.state.name.match(/^[A-Za-zäöåÄÖÅ\s]+$/) &&
            this.state.orderNumber.match(/^[A-Za-z\s0-9]+$/) &&
            this.state.subject.match(/^[A-Za-zäöåÄÖÅ\s0-9]+$/) &&
            this.state.message.match(/^[A-Za-zäöåÄÖÅ\s0-9]+$/)
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
       //apicall
        const email={
                name: this.state.name,
                email: this.state.email,
                orderNumber: this.state.orderNumber,
                subject: this.state.subject,
                message: this.state.message
        };
        axios.post('https://379v24c458.execute-api.eu-west-1.amazonaws.com/default/sendCSEmail',
            JSON.stringify(email),
            {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'POST'
                }
            })
            .then(resp => {
                alert("Email sent! ");
            }).catch(error => {
            alert(error);
        });
    };
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="box-2">
                        <div className="box-header">
                            <i className="fas fa-envelope ml-2 text-danger"/>
                            <span className="ml-3">EMAIL</span>
                            <hr/>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                        <div className="ml-2 text-muted">
                            <Row>
                                <Col md={4}>
                                    <FormGroup controlId="name">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={8}>
                                    <FormGroup controlId="message">
                                        <FormLabel>Your Message</FormLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <FormGroup controlId="email">
                                        <FormLabel>Email</FormLabel>
                                            <FormControl
                                                autoFocus
                                                type="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup controlId="subject">
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.subject}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <FormGroup controlId="orderNumber">
                                        <FormLabel>Order Number</FormLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.orderNumber}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormLabel>Send Email</FormLabel>
                                    <Button
                                        variant='outline-primary'
                                        block
                                        disabled={!this.validateForm()}
                                        type="submit"
                                    >
                                        SEND
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <div className="box-header mt-5">
                            <i className="fas fa-phone ml-2 text-danger"/>
                            <span className="ml-3">PHONE</span>
                            <hr/>
                        </div>
                        <div className="ml-2 text-muted mb-3">
                            <Row>
                                <Col md={2}>
                                    Cusmomer Service
                                    +46766299887
                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                </Col>
                            </Row>
                        </div>
                        </form>
                    </div>
                </div>
                <MyFooter/>
            </div>
        );
    }
}

export default Contact;