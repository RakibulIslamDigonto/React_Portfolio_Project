import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import web from '../../asset/image/010-world-wide-web.svg'
import graphic from '../../asset/image/graphic-design-svgrepo-com.svg'
import mobile from '../../asset/image/mobile-svgrepo-com.svg'



class Services extends Component {
    render() {
        return (
            <Fragment >
                <container className='text-center'>
                    <h1 className='servicesMainTitle'>MY SERVICES</h1>
                    <Row>
                        <Col className='serviceCardHover'  lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='servicesImg' src={web}/>
                                <h2 className='serviceName'>Web Development</h2>
                                <p className='serviceDescription'>Filler text is text that shares some characteristics of a real written text, but otherwise generated.</p>
                            </div>
                        </Col>

                        <Col className='serviceCardHover'  lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='servicesImg'  src={graphic}/>
                                <h2 className='serviceName'>Web Development</h2>
                                <p className='serviceDescription'>Filler text is text that shares some characteristics of a real written text, but otherwise generated.</p>
                            </div>
                        </Col>

                        <Col className='serviceCardHover' lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='servicesImg'  src={mobile}/>
                                <h2 className='serviceName'>Web Development</h2>
                                <p className='serviceDescription'>Filler text is text that shares some characteristics of a real written text, but otherwise generated.</p>
                            </div>
                        </Col>


                    </Row>
                </container>


            </Fragment>
        );
    }
}

export default Services;