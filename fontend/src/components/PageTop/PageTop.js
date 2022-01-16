import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='topPageFixed p-0'>
                    <div className='topPageOverlay'>
                        <Container className='topPageContent text-center'>
                            <Row>
                                <Col>
                                    <h3 className='topPageTitle'>{this.props.pageTitle}</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;