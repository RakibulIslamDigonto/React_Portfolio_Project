import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='text-center footerSection'>
                    <Row>
                        <Col lg={3} md={3} sm={12} className='p-5 text-start'>
                            <h1 className='serviceName'>Follow Me</h1>
                            <a className='socialLink' href='#'><FontAwesomeIcon className='iconBullet' icon={faFacebook}/> Facebook</a><br/>
                            <a className='socialLink' href='#'><FontAwesomeIcon className='iconBullet' icon={faYoutube}/> YouTube</a>


                        </Col>

                        <Col lg={3} md={3} sm={12} className='p-5 text-start'>
                            <h1 className='serviceName'>Address</h1>
                            <p className='serviceDescription'>Mirpur-11, toyooba mosque</p>
                            <p className='serviceDescription'><FontAwesomeIcon className='iconBullet' icon={faEnvelope}/> rakibdigonto11@gmail.com</p>
                            <p className='serviceDescription'><FontAwesomeIcon className='iconBullet' icon={faPhone}/> ++01737765636</p>
                        </Col>

                        <Col lg={3} md={3} sm={12} className='p-5 text-start'>
                            <h1 className='serviceName'>Information</h1>
                            <a className='footerLink' href='#'>About me</a><br/>
                            <a className='footerLink' href='#'>My Resume</a><br/>
                            <a className='footerLink' href='#'>Contact Me</a>

                        </Col>

                        <Col lg={3} md={3} sm={12} className='p-5 text-start'>
                            <h1 className='serviceName'>Legal</h1>
                            <a className='footerLink' href='#'>Refund Policy</a><br/>
                            <a className='footerLink' href='#'>Terms and Condition</a><br/>
                            <a className='footerLink' href='#'>Privacy Policy</a>

                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className='text-center copyrightSection'>

                    <a className='copyrightLink'>ridcodestudio.com &copy; 2021-2022</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;