import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className='serviceName'>Who I Am</h1>
                            <hr/>
                            <p className='serviceDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                            <h1 className='serviceName'>My Mission</h1>
                            <hr/>
                            <p className='serviceDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap  unchanged. </p>

                            <h1 className='serviceName'>My Vision</h1>
                            <hr/>
                            <p className='serviceDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but sentially unchanged. </p>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AboutDescription;