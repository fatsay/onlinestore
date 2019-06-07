import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Firebase from "../config/Firebase";
import logo from '../images/logo1.png';
import UserImg from '../images/UserImage.png';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            isAdmin:""
        };
        this.logOut=this.logOut.bind(this)
    }
    componentDidMount() {
        const user=localStorage.getItem('user');
        if (user){
            let name=user.split("@");
            this.setState({
                email:name[0],
            })
        }
        //api call to get user call
        //set state userRole according to user role
        //change navBar
        /*
        let user=Firebase.auth().currentUser;
            let token=user.getIdToken(true).then(token=>
                axios.get('https://europe-west1-cloudproject-f25f2.cloudfunctions.net/data/role/'+this.state.email,
                    {
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                            'Authorization': 'Bearer ' + token
                        }
                    }).then(resp => {
                    this.setState({userRole:resp.data.role});
                    this.props.history.push('/')
                })

            ).catch(error => {
                this.setState({message: error.toString()});
            });
         */

    }
    logOut=event=>{
        event.preventDefault();
        Firebase.auth().signOut();
        this.setState({
            email:""
        })
    };

    render() {
        return (
            <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
                <div className="container">
                <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </Button>
                    <img src={logo} alt={logo}/>
                <div className="collapse navbar-collapse ml-4" id="containerNavbar">
                    <ul className="navbar-nav mr-auto align-items-center">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="http://example.com" id="dropdown01"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <Link className="dropdown-item" to="/mobile">Mobile Phones</Link>
                                <Link className="dropdown-item" to="/laptop">Laptops</Link>
                                <Link className="dropdown-item" to="/tv">Tv</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                        {this.state.email==="" &&
                        <ul className="navbar-nav mr-lg-0 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <button type="button" className="btn btn-outline-warning">
                                        <span className="mr-2">
                                             <i className="fas fa-cart-plus"/>
                                        </span>
                                        My cart
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        }

                        {this.state.email.length>0 &&
                        <ul className="navbar-nav mr-lg-0 align-items-center">
                            <li className="text-right">
                                <img src={UserImg} alt="user" style={{width:"20%"}}/>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="http://example.com" id="dropdown02"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.email}</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown02">
                                    <Link className="dropdown-item" to="/" onClick={this.logOut}>Logout</Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <button type="button" className="btn btn-outline-warning">
                                       <span className="mr-2">
                                             <i className="fas fa-cart-plus"/>
                                        </span>
                                        My cart
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        }
                </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;