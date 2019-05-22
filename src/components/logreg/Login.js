import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button,FormGroup, FormControl,Alert} from "react-bootstrap";
import './LogReg.css';
import NavBar from '../../bootstrap/NavBar';
import userImage from '../../images/UserImage.png';
import firebase, {auth, providerFacebook, providerGoogle} from '../../config/Firebase';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            message:"",
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validateForm=this.validateForm.bind(this);
        this.signInWithGoogle=this.signInWithGoogle.bind(this);
        this.signInWithFacebook=this.signInWithFacebook.bind(this);
    }

    validateForm =()=> {
        return this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            && this.state.password.length > 7
            && this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/);
    };
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({message:""});
        //user authentication code
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
            localStorage.setItem('user',this.state.email);
             this.props.history.push('/');
        }).catch(error=> {
            this.setState({message: error.message});
        });
    };
    signInWithGoogle=()=>{
        this.setState({message:""});
        auth.signInWithPopup(providerGoogle).then((result)=>{
            localStorage.setItem('user',result.user.email);
            this.props.history.push('/')
        }).catch((error)=> {
            // Handle Errors here.
            this.setState({message:error.message})
        })
    };
    signInWithFacebook=()=>{
        this.setState({message:""});
        auth.signInWithPopup(providerFacebook).then((result)=>{
            localStorage.setItem('user',result.user.email);
            this.props.history.push('/')
        }).catch((error)=> {
            // Handle Errors here.
            this.setState({message:error.message})
        })
    };
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="login">
                        <div className="header">
                            <span>LOGIN TO YOUR ACCOUNT</span>
                        </div>
                        <div className="info">
                            <span>Enter your information below to login to your account</span>
                        </div>
                        <hr/>
                        <div className="image">
                            <img src={userImage} alt="userImage"/>
                        </div>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="email">
                                <FormControl
                                    autoFocus
                                    placeholder="E-mail"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password">
                                <FormControl
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            {this.state.message.length>0 &&
                            <Alert dismissible variant="warning">
                                <hr />
                                <p>
                                    {this.state.message}
                                </p>
                            </Alert>
                            }
                            <Button
                                variant='success'
                                block
                                disabled={!this.validateForm()}
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                LOGIN
                            </Button>
                        </form>
                        <hr/>
                        <div className="signIn-option">
                            <GoogleLoginButton
                                iconSize="20px"
                                align="center"
                                size="30px"
                                onClick={this.signInWithGoogle}>
                                <span className="signIn-button">Login with Google Account</span>
                            </GoogleLoginButton>
                            <FacebookLoginButton
                                iconSize="20px"
                                align="center"
                                size="30px"
                                onClick={this.signInWithFacebook}>
                                <span className="signIn-button">Login with Facebook Account</span>
                            </FacebookLoginButton>
                        </div>
                        <hr/>
                        <div className="info">
                            <Link to="/updatePassword">Forgot password?</Link>
                        </div>
                        <div className="info">
                            <Link to="/register">Create account</Link>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;