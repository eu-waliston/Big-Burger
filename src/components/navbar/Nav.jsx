import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <img src={require("../../components/img/Icon.png")} alt="logo"  className="logo"/>
                <div className="nav__iten">
                    <a href="" className="nav__itens">home</a>
                    <a href="" className="nav__itens">product </a>
                    <a href="" className="nav__itens">promo</a>
                    <a href="" className="nav__itens">about</a>
                    <a href="" className="nav__itens">contact</a>
                </div>
            </div>
        </div>
    )
}

export default Nav;