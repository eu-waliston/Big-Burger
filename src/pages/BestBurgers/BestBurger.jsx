import React from "react";
import "./BestBurger.css";


const BestBurger = () => {

    return (
        <div id="best-burger" className="bestburger--section">
            <div className="best-burgers">

                <div className="best-burger-1">
                    <div className="left-content">
                        <img src={require("../../components/img/burger-1.png")} alt="burger" />
                    </div>
                    <div className="right-content">
                        <h1>Best Burger</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium velit rerum, ea pariatur sint ipsa,</p>
                        <button>order now</button>
                    </div>
                </div>


                <div className="best-burger-2">

                    <div className="left-content">
                        <img src={require("../../components/img/burger-2.png")} alt="burger" />
                    </div>
                    <div className="right-content">
                        <h1>Best Burger</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium velit rerum, ea pariatur sint ipsa,</p>
                        <button>order now</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BestBurger;