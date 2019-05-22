import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import Shop from '../images/Shop.jpg';
import Mobile from '../images/Mobile.jpg';
import Laptop from '../images/Laptops.jpg';
import './Bootstrap.css';
import {Link} from "react-router-dom";

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Laptop}
                            alt="Third slide"
                        />
                    <Carousel.Caption>
                        <Link to="/laptop"><h4 className="text-title">Laptops</h4></Link>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Mobile}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Link to="/mobile"><h4 className="text-title">Mobile Phones</h4></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Shop}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Link to="/tv"><h4 className="text-title">Home Electronics</h4></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MyCarousel;