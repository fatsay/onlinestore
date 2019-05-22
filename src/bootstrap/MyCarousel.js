import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import Shop from '../images/Shop.jpg';
import Mobile from '../images/Mobile.jpg';
import Laptop from '../images/Laptops.jpg';
import './Bootstrap.css';

class Carousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Shop}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                            <h1>For Home</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Laptop}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Laptops</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Mobile}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Mobile Phones</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Carousel;