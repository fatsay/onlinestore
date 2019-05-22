import React, {Component} from 'react';
import NavBar from '../../bootstrap/NavBar'
import Firebase from "../../config/Firebase";
import {Alert, Button, FormControl, FormGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import './LogReg.css'
import InfoImg from "../../images/info.png";
class UpdatePassword extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            confirmEmail:"",
            message:""
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validateForm=this.validateForm.bind(this);
    }
    validateForm =() => {
        return(this.state.email.length > 7 &&
        this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
        this.state.email===this.state.confirmEmail
        )
    };
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        Firebase.auth().sendPasswordResetEmail(this.state.email).then(()=> {
            this.setState({message:"Confirmation mail sent to your email address!!"})
        }).catch((error) =>{
            // An error happened.
            this.setState({message: error.toString()});
        });
        //user authentication code
    };
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="login">
                        <div className="header">
                            <span>UPDATE PASSWORD</span>
                        </div>
                        <div className="info">
                            <span>Enter your email below to reset your password.</span>
                        </div>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="email">
                                <FormControl
                                    autoFocus
                                    placeholder="Email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="confirmEmail">
                                <FormControl
                                    placeholder="Confirm email"
                                    value={this.state.confirmEmail}
                                    onChange={this.handleChange}
                                    type="email"
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
                                Update Password
                            </Button>
                        </form>
                        <hr/>
                        <div className="info">
                            <Link to="/register">Create account</Link>
                        </div>
                        <hr/>
                        <div className="info-img">
                            <img src={InfoImg} alt="infoImg"/>
                            <span>
                            Password must be at least 8 characters long
                            and contain at least 1 uppercase letter,
                            number and non-alphanumeric characters.</span>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>

        );
    }
}

export default UpdatePassword;