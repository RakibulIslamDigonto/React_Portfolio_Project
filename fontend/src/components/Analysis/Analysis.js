import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";


class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state={

            data:[
                {Technology:'HTML', Project:'100'},
                {Technology:'CSS', Project:'10'},
                {Technology:'Bootstrap', Project:'80'},
                {Technology:'React', Project:'70'},
                {Technology:'Python', Project:'75'},
                {Technology:'Django', Project:'85'},
                {Technology:'MySQL', Project:'65'}
            ]
        }
    }




    render() {
        var blue='rgba(0,115,230,0.8)';
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='servicesMainTitle'>Technology Used</h1>
                    <Row>
                        <Col style={{width:'100', height:'300'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey='Technology' />
                                    <Tooltip/>
                                    <Bar dataKey='Project' fill={blue}>

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className='text-justify des'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour,  when our power of choice is untrammelled and when nothing prevents our being able to do what we like best,every pleasure is to be welcomed and every pain avoided. </p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Analysis;