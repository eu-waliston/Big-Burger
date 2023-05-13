import React from "react";
import "./Nav.css";

import { HashLink } from "react-router-hash-link";

const Nav = () => {

    return (
        <div className="navbar">
            <div className="nav">
                <img src={require("../../components/img/Icon.png")} alt="logo" className="logo" />

                <div className="nav__iten">
                    <HashLink smooth to="#home" className="nav__itens" >home</HashLink>
                    <HashLink smooth to="#product" className="nav__itens" >product </HashLink>
                    <HashLink smooth to="#promo" className="nav__itens" >promo</HashLink>
                    <HashLink smooth to="#about" className="nav__itens" >about</HashLink>
                    <HashLink smooth to="#contact" className="nav__itens" >contact</HashLink>
                </div>
            </div>
        </div>
    )
}

export default Nav;