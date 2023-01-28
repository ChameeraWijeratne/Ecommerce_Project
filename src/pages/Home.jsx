import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom"
import {motion} from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css"

import {Col, Container, Row} from "reactstrap";
import heroImg from "../assets/images/hero-bg-1.png"
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/counter-timer-img-1.png"

const Home = () => {
    const [trendingProducts,setTrendingProducts] = useState([])
    const [bestSalesProducts,setBestSalesProducts] = useState([])
    const [bestSalesProducts_1,setBestSalesProducts_1] = useState([])
    const [mobileProducts,setMobileProducts] = useState([])
    const [wirelessProducts,setWirelessProducts] = useState([])
    const [popularProducts,setPopularProducts] = useState([])

    const year = new Date().getFullYear();

    useEffect(()=>{
        const filteredTrendingProducts = products.filter(item=>item.category === "handbag");

        const filteredBestSalesProducts = products.filter(item=>item.category === "shoes");

        const filteredBestSalesProducts_1 = products.filter(item=>item.category === "sunglass");

        const filteredMobileProducts = products.filter(item=>item.category === "mobile");

        const filteredWirelessProducts = products.filter(item=>item.category === "wireless");

        const filteredPopularProducts = products.filter(item=>item.category === "watch");

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setBestSalesProducts_1(filteredBestSalesProducts_1);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
        },[]);

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

                            <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
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
                        <ProductList data={trendingProducts}/>
                    </Row>
                </Container>
            </section>

            <section className="best_sales">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section_title">Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts}/>
                        <ProductList data={bestSalesProducts_1}/>
                    </Row>
                </Container>
            </section>

            <section className="timer_count">
                <Container>
                    <Row>
                        <Col lg='6' md='6' >
                            <div className="clock_top_content">
                                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                                <h3 className="text-white fs-5 mb-3">Quality Handbags</h3>
                            </div>
                            <Clock/>
                            <motion.button whileTap={{scale: 1.2}} className="buy_btn store_btn"><Link to='/shop'>Visit Store</Link></motion.button>
                        </Col>
                        <Col lg='6' md='6' className="text-end">
                            <img src={counterImg} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new_arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section_title">New Arrivals</h2>
                        </Col>
                        <ProductList data={mobileProducts}/>
                        <ProductList data={wirelessProducts}/>
                    </Row>
                </Container>
            </section>
            <section className="popular_category">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center mb-5">
                            <h2 className="section_title">Popular in Category</h2>
                        </Col>
                        <ProductList data={popularProducts}/>

                    </Row>
                </Container>
            </section>
    </Helmet>
    );
};

export default Home;
