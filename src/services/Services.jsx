import React from "react";

import { Container, Row, Col } from "reactstrap";

import './services.css';

const Services = () => {
    return <section className="services">
        <Container>
            <Row>
                <Col lg='3' md='4'>
                    <div className="service_item">
                        <span><i className="ri-truck-line"></i></span>
                        <div>
                            <h3>Free Shipping</h3>
                            <p>Island Wide Free Shipping</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Services;
