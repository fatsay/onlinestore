import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

class MyAlert extends Component {
    render() {
        return (
            <Alert dismissible variant="warning">
                <hr />
                <p>
                    {this.props.message1}
                </p>
                <p>
                    {this.props.message2}
                </p>
                <ul>
                    {this.props.list1}
                </ul>

            </Alert>
        );
    }
}

export default MyAlert;