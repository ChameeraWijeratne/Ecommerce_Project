import React from "react";

import {Link} from "react-router-dom"
import {motion} from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css"

import {Col, Container, Row} from "reactstrap";
import heroImg from "../assets/images/hero-bg-1.png"
import Services from "../services/Services";

const Home = () => {
    const year = new Date().getFullYear();
    return (
        <Helmet title={"Home"}>
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero_content">
                            <p className="hero_subtitle">Trending Product in {year}</p>
                            <h2>THE LATEST LUXURY PRODUCTS</h2>
                            <p>Embrace brighter days with products from the top designers</p>

                            <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to='shop'>SHOP NOW</Link></motion.button>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero_img">
                            <img src={heroImg} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
            <Services/>
            <section className="trending_products">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section_title">Trending Products</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
    </Helmet>
    );
};

export default Home;
