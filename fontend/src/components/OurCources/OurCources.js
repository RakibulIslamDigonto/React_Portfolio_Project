import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import crs1 from '../../asset/image/course1.png'

class OurCources extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='servicesMainTitle'>OUR COURSES</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12} className='p-2'>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src={crs1}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className='courseTitle'>Web Development</h5>
                                    <p className='courseDes'>Ome quick example text to build on the card title and make up the bulk</p>
                                    <a className='courseDetails float-start'>Details</a>
                                </Col>

                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className='p-2'>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src={crs1}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className='courseTitle'>Web Development</h5>
                                    <p className='courseDes'>Ome quick example text to build on the card title and make up the bulk</p>
                                    <a className='courseDetails float-start'>Details</a>
                                </Col>

                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className='p-2'>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src={crs1}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className='courseTitle t'>Web Development</h5>
                                    <p className='courseDes'>Ome quick example text to build on the card title and make up the bulk</p>
                                    <a className='courseDetails float-start'>Details</a>
                                </Col>

                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className='p-2'>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='courseImg' src={crs1}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className='courseTitle'>Web Development</h5>
                                    <p className='courseDes'>Ome quick example text to build on the card title and make up the bulk</p>
                                    <a className='courseDetails float-start'>Details</a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default OurCources;