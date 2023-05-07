import React from "react";
import "./Home.css";
import background from "../../components/img/session-img-1.png"
import Nav from "../../components/navbar/Nav";

const Home = () => {
    return (
        <>
        <Nav />
            <div className="home__page" style={{ backgroundImage: `url(${background})`}}>
                <div className="infos">
                    <h1 className="title">Get Cashback <br /> up to 50%</h1>
                    <p className="sub__title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nesciunt reprehenderit, asperiores praesentium illo quasi rem libero.</p>
                    <h3 className="btn--orange">order now</h3>
                </div>
            </div >
        </>
    )
}

export default Home;