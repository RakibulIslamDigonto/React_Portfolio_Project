import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";



class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='topBannerFixed p-0'>
                    <div className='topBannerOverlay'>
                        <Container className='topContent text-center'>
                            <Row>
                                <Col>
                                    <h1 className='topTitle'>SOFTWARE ENGINEER</h1>
                                    <h3 className='topSubTitle'>python/django developer</h3>
                                    <Button variant="primary">Know About Me</Button>

                                </Col>
                            </Row>
                        </Container>

                    </div>

                </Container>
                
            </Fragment>
        );
    }
}

export default TopBanner;