import React, {Component} from 'react';
import {Alert, Button, FormControl, FormGroup} from "react-bootstrap";
import NavBar from '../../bootstrap/NavBar';
import Firebase from '../../config/Firebase'
import './LogReg.css';
import {Link} from "react-router-dom";
import InfoImg from'../../images/info.png'

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
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
            this.state.password===this.state.confirmPassword
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            this.props.history.push("/")
        }).catch((error)=> {
            console.log(error);
        });
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