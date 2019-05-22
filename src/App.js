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
                //console.log(user.email)
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
                    <Route component={Default}/>
            </Switch>
        </React.Fragment>
    );
  }
}

export default App;
