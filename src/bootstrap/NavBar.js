import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button,Form, FormControl} from "react-bootstrap";
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
                <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </Button>
                <Link className="navbar-brand" to="#">Navbar</Link>

                <div className="collapse navbar-collapse" id="containerNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">Disabled</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="http://example.com" id="dropdown01"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ES6 Examples</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <Link className="dropdown-item" to="/arrowFunction">Arrow Function</Link>
                                <Link className="dropdown-item" to="/objectClass">Object Class</Link>
                                <Link className="dropdown-item" to="/">Something else here</Link>
                            </div>
                        </li>
                    </ul>
                    <Form className="form-inline my-2 my-md-0">
                        <FormControl className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
                    </Form>
                </div>
            </nav>

        );
    }
}

export default NavBar;