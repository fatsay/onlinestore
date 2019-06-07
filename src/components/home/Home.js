import React, {Component} from 'react';
import NavBar from '../../bootstrap/NavBar';
import MyCarousel from '../../bootstrap/MyCarousel';
import MyFooter from '../../bootstrap/MyFooter';
import BottomImg1 from '../../images/Bottom1.png';
import BottomImg2 from '../../images/Bottom2.png'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            userRole:""
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className='container'>
                    <div className="mt-4">
                        <MyCarousel/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <div className="col-md-6 text-center">
                            <img src={BottomImg1} alt="img1"/>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={BottomImg2} alt="img2"/>
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </div>

        );
    }
}

export default Home;