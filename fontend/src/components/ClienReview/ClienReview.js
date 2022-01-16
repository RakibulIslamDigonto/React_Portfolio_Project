import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import profileImage from '../../asset/image/profile image.jpg'

class ClienReview extends Component {
    render() {
        var settings = {
            autoplaySpeed: 3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 2000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='servicesMainTitle'>CLIENT SAYS</h1>
                        <Slider {...settings}>
                            <div>
                                <Row className='text-center justify-content-center'>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className='circleImg' src={profileImage}/>
                                        <h1 className='serviceName'>Web Development</h1>
                                        <p className='serviceDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>


                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <Row className='text-center justify-content-center'>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className='circleImg' src={profileImage}/>
                                        <h1 className='serviceName'>Web Development</h1>
                                        <p className='serviceDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>


                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <Row className='text-center justify-content-center'>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className='circleImg' src={profileImage}/>
                                        <h1 className='serviceName'>Web Development</h1>
                                        <p className='serviceDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>


                                    </Col>
                                </Row>
                            </div>

                        </Slider>
                </Container>

            </Fragment>
        );
    }
}

export default ClienReview;