import React from "react";
import "./footer.css"

import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Footer = () => {

    const year = new Date().getFullYear()

    return <footer className="footer">
        <Container>
            <Row>
                <Col lg="4">
                    <div className="logo">
                        <div>
                            <h1>About Bloomingdale's</h1>
                        </div>
                    </div>
                    <p className="footer_text mt-4">
                        At Bloomingdale's, we create pathways
                        to connect millions of sellers and
                        buyers in more than 190 markets around
                        the world.
                        Our technology empowers our customers,
                        providing everyone in the world.
                    </p>
                </Col>
                <Col lg="3">
                    <div className="footer_quick-links">
                        <h4 className="quick_links-title">Top Categories</h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Mobile Phones</Link>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Smart Watches</Link>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Latest Handbags</Link>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Sunglasses</Link>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                                <Link to="#">Shoes</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="2">
                    <div className="footer_quick-links">
                        <h4 className="quick_links-title">Useful Links</h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="/shop">Shop</Link>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                                <Link to="/cart">Cart</Link>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                                <Link to="/login">Login</Link>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                                <Link to="/">Privacy Policy</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="3">
                    <div className="footer_quick-links">
                        <h4 className="quick_links-title">Contacts</h4>
                        <ListGroup className="footer_contact">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i className="ri-map-pin-line"></i></span>
                                <p>123, Mount Lavania, Colombo</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i className="ri-mail-line"></i></span>
                                <p>bloomingdales@gmail.com</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i className="ri-facebook-fill"></i></span>
                                <p>Bloomingdales</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>

                <Col lg="12">
                    <p className="footer_copyright">Copyright {year} developed by Chameera Wijeratne. All rights reseved</p>
                </Col>
            </Row>
        </Container>
    </footer>;
};

export default Footer;
