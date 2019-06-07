import React, { Component } from 'react';
import './App.css'
import {Switch, Route} from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/logreg/Login';
import Register from './components/logreg/Register';
import UpdatePassword from './components/logreg/UpdatePassword';
import firebase from './config/Firebase';
import Default from './components/home/Default';
import ProductListMobile from './components/products/ProductListMobile'
import Details from './components/products/Details';
import Cart from './components/cart/Cart';
import ProductListTv from './components/products/ProductListTv';
import ProductListLaptop from './components/products/ProductListLaptop';
import Shipping from './components/cart/Shipping';
import Payment from './components/cart/Payment';
import About from './components/home/About';
import Contact from './components/home/Contact';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        this.authListener();
    }
    authListener(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.setState({user});
                localStorage.setItem('user',user.email.toString());
            }else {
                this.setState({user:null});
                localStorage.removeItem('user');
            }
        });
    }
    render() {
    return (
        <React.Fragment>
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/updatePassword" component={UpdatePassword}/>
                    <Route exact path="/mobile" component={ProductListMobile}/>
                    <Route exact path="/tv" component={ProductListTv}/>
                    <Route exact path="/laptop" component={ProductListLaptop}/>
                    <Route exact path="/details" component={Details}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/shipping" component={Shipping}/>
                    <Route exact path="/payment" component={Payment}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route component={Default}/>
            </Switch>
        </React.Fragment>
    );
  }
}

export default App;
