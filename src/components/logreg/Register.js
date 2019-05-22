import React, {Component} from 'react';
import {Alert, Button, FormControl, FormGroup} from "react-bootstrap";
import NavBar from '../../bootstrap/NavBar';
import axios from 'axios';
import './LogReg.css';
import {Link} from "react-router-dom";
import InfoImg from'../../images/info.png'

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        };
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
            this.state.password.length > 7 &&
            this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/) &&
            this.state.password===this.state.confirmPassword &&
            this.state.firstName.match(/^[A-Za-z]+$/) &&
            this.state.lastName.match(/^[A-Za-z]+$/)
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            "firstName":this.state.firstName,
            "lastName":this.state.lastName,
            "email":this.state.email,
            "password":this.state.password
        };/*
        axios.post('https://europe-west1-cloudproject-f25f2.cloudfunctions.net/register/',
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                }
            }).then(resp => {
                this.props.history.push('/')
            }
        ).catch(error => {
            this.setState({isValid:"false"});
            this.setState({error:error.toString()});
            console.log(error)
        });*/
    };
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="register">
                        <div className="header">
                            <span>CREATE A NEW ACCOUNT</span>
                        </div>
                        <div className="info">
                            <span>Please fill in the information below to create your account</span>
                        </div>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="firstName">
                                <FormControl
                                    placeholder="First name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup controlId="lastName">
                                <FormControl
                                    placeholder="Last name"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup controlId="email">
                                <FormControl
                                    autoFocus
                                    placeholder="E-mail address"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password">
                                <FormControl
                                    placeholder="Password (min. 8 characters A-Z,a-z,0-9,non-alphanumeric)"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <FormGroup controlId="confirmPassword">
                                <FormControl
                                    placeholder="Confirm password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            {this.state.isValid === "false" &&
                            <Alert dismissible variant="warning">
                                <hr/>
                                <p>
                                    {this.state.error}
                                </p>
                            </Alert>
                            }
                            <Button
                                variant='success'
                                block
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                                REGISTER
                            </Button>
                        </form>
                        <div className="info">
                            <Link to="/updatePassword">Forgot password?</Link>
                        </div>
                        <div className="info">
                            <Link to="/login">Login</Link>
                        </div>
                        <hr/>
                        <div className="info-img">
                            <img src={InfoImg} alt="infoImg"/>
                            <span>
                             By signing up you agree to receive exclusive offers,
                             style tips and recommendations via newsletters.
                             You can at any time unsubscribe.</span>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Register;