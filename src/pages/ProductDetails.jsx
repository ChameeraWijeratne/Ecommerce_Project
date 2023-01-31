import React from "react";

import {Container,Row,Col} from "reactstrap";
import {useParams} from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/product-details.css';

const ProductDetails = () => {

    const {id} = useParams()
    const product = products.find(item => item.id === id)

    const {imgUrl,productName, price, avgRating, review, description, shortDesc} = product

    return (
    <Helmet>
        <CommonSection />

        <section className="pt-0">
            <Container>
                <Row>
                    <Col lg = '6'>
                        <img className="image" src={imgUrl} alt=""/>
                    </Col>
                    <Col lg = '6'>
                        <div className="product_details">
                            <h2>{productName}</h2>
                            <div className="product_rating d-flex align-items-center gap-5 mb-3">
                                <div>
                                    <span>
                                        <i className="ri-star-s-fill"></i>
                                    </span>
                                    <span>
                                        <i className="ri-star-s-fill"></i>
                                    </span>
                                    <span>
                                        <i className="ri-star-s-fill"></i>
                                    </span>
                                    <span>
                                        <i className="ri-star-s-fill"></i>
                                    </span>
                                    <span>
                                        <i className="ri-star-half-s-line"></i>
                                    </span>
                                </div>
                                <p>(<span>{avgRating}</span> ratings)</p>
                            </div>

                            <span className="product_price">${price}</span>
                            <p className="mt-3">{shortDesc}</p>

                            <button className="buy_btn">Add to Cart</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};

export default ProductDetails;
