import React from "react";
import "./Product.css";

const Product = () => {
    return (
        <div className="product-containert" id="product">

            <img src={require("../../components/img/iten-3.png")} alt="icon" className="back-icon-p3" />
            <img src={require("../../components/img/iten-5.png")} alt="icon" className="back-icon-p5" />
            <img src={require("../../components/img/iten-2.png")} alt="icon" className="back-icon-p2" />

            <h1 className="p-title">Products</h1>
            <div className="products">
                <div className="product">
                    <h1 className="p-name">Product I</h1>
                    <div><img src={require("../../components/img/Icon.png")} alt="burger" className="p-image" /></div>
                    <h3 className="p-price">$20.00</h3>
                    <p className="p-info">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <div><button className="p-order">order now</button></div>
                </div>

                <div className="product">
                    <h1 className="p-name">Product II</h1>
                    <div><img src={require("../../components/img/Icon.png")} alt="burger" className="p-image" /></div>
                    <h3 className="p-price">$20.00</h3>
                    <p className="p-info">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <div><button className="p-order">order now</button></div>
                </div>

                <div className="product">
                    <h1 className="p-name">Product III</h1>
                    <div><img src={require("../../components/img/Icon.png")} alt="burger" className="p-image" /></div>
                    <h3 className="p-price">$20.00</h3>
                    <p className="p-info">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <div><button className="p-order">order now</button></div>
                </div>
            </div>


            <img src={require("../../components/img/iten-1.png")} alt="icon" className="back-icon-p1" />
            <img src={require("../../components/img/iten-5.png")} alt="icon" className="back-icon-p5-2" />
            <img src={require("../../components/img/iten-4.png")} alt="icon" className="back-icon-p4" />

        </div>
    )
}

export default Product;