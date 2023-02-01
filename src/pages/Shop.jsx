import React,{useState} from "react";

import '../styles/shop.css'

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Container,Row,Col} from "reactstrap";


import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductList";



const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handleFilter = e=>{
        const filterValue = e.target.value
            if(filterValue==='handbag'){
                const filteredProducts = products.filter(item => item.category === 'handbag')
                setProductsData(filteredProducts);
            }

            if(filterValue==='mobile'){
                const filteredProducts = products.filter(item => item.category === 'mobile')
                setProductsData(filteredProducts);
            }

            if(filterValue==='watch'){
                const filteredProducts = products.filter(item => item.category === 'watch')
                setProductsData(filteredProducts);
            }

            if(filterValue==='shoes'){
                const filteredProducts = products.filter(item => item.category === 'shoes')
                setProductsData(filteredProducts);
            }

            if(filterValue==='wireless'){
                const filteredProducts = products.filter(item => item.category === 'wireless')
                setProductsData(filteredProducts);
            }

            if(filterValue==='sunglass'){
                const filteredProducts = products.filter(item => item.category === 'sunglass')
                setProductsData(filteredProducts);
            }


    };

    const handleSearch = e =>{
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(
            searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }
    return (
    <Helmet title='Shop'>
        <CommonSection title='Products' />
            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className="filter_widget">
                                <select onChange={handleFilter}>
                                    <option>Filter By Category</option>
                                    <option value="handbag">Handbag</option>
                                    <option value="watch">Watch</option>
                                    <option value="sunglass">Sunglass</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="wireless">Headphone</option>
                                    <option value="shoes">Shoes</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='6' className="text-end">
                            <div className="filter_widget">
                                <select>
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className="search_box">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    onChange = {handleSearch}
                                    />
                                <span>
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        <section className="products">
            <Container>
                <Row>
                    {
                        productsData.length === 0? (
                            <h1 className="text-center fs-4">No products are found!</h1>
                        ) : (
                            <ProductsList data={productsData} />
                        )
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};

export default Shop;
