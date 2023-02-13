import React from "react";
import {Container, Row, Col} from "reactstrap";

import useAuth from "../custom-hooks/useAuth";
import '../styles/admin-nav.css';

const AdminNav = () =>{

    const {currentUser} = useAuth()

    return(
        <header className="admin_header">
            <div className="admin_nav-top">
                <Container>
                    <div className="admin_nav-wrapper-top">
                        <div className="logo">
                            <h2>Bloomingdale's</h2>
                        </div>

                        <div className="search_box">
                            <input type="text" placeholder="Search...."/>
                            <span><i className="ri-search-line"></i></span>
                        </div>
                        <div className="admin_nav-top-right">
                            <span><i className="ri-notification-3-fill"></i></span>
                            <span><i className="ri-settings-5-fill"></i></span>
                            <img src={currentUser.photoURL} alt=""/>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default AdminNav;
