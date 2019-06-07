import React, {Component} from 'react';
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";

class Invoice extends Component {
    constructor(props){
        super(props);
        this.state={
            personNumber:"",
            name:"",
            lastName:"",
            email:""
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validateForm=this.validateForm.bind(this);
    }
    validateForm =()=> {
        return this.state.name.match(/^[A-Za-zäöåÄÖÅ\s]+$/) &&
            this.state.lastName.match(/^[A-Za-zäöåÄÖÅ\s]+$/) &&
            this.state.personNumber.match(/^[0-9]*$/) &&
            this.state.personNumber.length===12 &&
            this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    };
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({message:""});
        //api call send variables

    };
    render() {
        return (
            <div className="mb-3 ml-5">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="personNumber">
                        <FormLabel>Personal Id. Number</FormLabel>
                        <FormControl
                            type="number"
                            value={this.state.personNumber}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="name">
                        <FormLabel>First Name</FormLabel>
                        <FormControl
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl
                            value={this.state.email}
                            onChange={this.handleChange}
                            type="email"
                        />
                    </FormGroup>
                    <Button
                        variant='outline-primary'
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        PLACE ORDER
                    </Button>
                </form>
            </div>
        );
    }
}

export default Invoice;