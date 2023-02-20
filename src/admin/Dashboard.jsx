import React from "react";
import {Container, Row, Col} from "reactstrap";
import "../styles/dashboard.css";

import useGetData from "../custom-hooks/useGetData";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Dashboard = () =>{

    const {data: products} = useGetData("products")
    const {data: users} = useGetData("users")

    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col className="lg-3">
                            <div className="revenue_box">
                                <h5>Total Sales</h5>
                                <span>$7890</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                            <div className="orders_box">
                                <h5>Orders</h5>
                                <span>90</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                            <div className="products_box">
                                <h5>Total Products</h5>
                                <span>{products.length}</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                            <div className="users_box">
                                <h5>Total Users</h5>
                                <span>{users.length}</span>
                            </div>
                        </Col>
                        <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to='/dashboard/add-product'>ADD NEW PRODUCT</Link></motion.button>
                        <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to='/home'>HOME</Link></motion.button>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Dashboard;
