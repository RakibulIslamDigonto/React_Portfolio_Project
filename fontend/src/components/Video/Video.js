import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})




    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col className='videoCard' lg={12} md={12} sm={12}>
                            <div>
                                <p className='videoTitle'>How I Do</p>
                                <p className='videoDes'>Filler text is text that shares some characteristics of a real written.Filler text is text that shares some characteristics of a real written.Text is text that shares some characteristics of a real written,Filler text is text that shares some characteristics.</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className='vidBtn' icon={faPlayCircle}/></p>
                            </div>
                        </Col>
                    </Row>
                </Container>



                <Modal size='lg' show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body className=''>
                        <Player>

                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position='center'/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;