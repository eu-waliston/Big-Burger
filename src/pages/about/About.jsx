import React from "react";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about_us" id="about">

                <img src={require("../../components/img/iten-5.png")} className="icon-5" alt="icon" />
                <img src={require("../../components/img/iten-4.png")} className="icon-4" alt="icon" />
                <img src={require("../../components/img/iten-3.png")} className="icon-3" alt="icon" />


                <div className="our--chefs">
                    <div className="info--top">
                        <h1>our chef.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure laudantium voluptatem at ratione!<br />  Modi ipsam at veritatis dolorem deserunt vero? Aspernatur laborum, <br />laboriosam explicabo dicta inventore corrupti quisquam beatae.</p>
                    </div>
                    <div className="our__chefs__grid">
                        <div className="our__chef_itens">
                            <img src={require("../../components/img/img-1-modified.png")} alt="chef" className="img--chef" />
                            <h2>Aiden Hunter</h2>
                            <p>founder</p>
                        </div>
                        <div className="our__chef_itens">
                            <img src={require("../../components/img/img-2-modified.png")} alt="chef" className="img--chef" />
                            <h2>Ethel Ramsey</h2>
                            <p>co-founder</p>
                        </div>
                        <div className="our__chef_itens">
                            <img src={require("../../components/img/img-3-modified.png")} alt="chef" className="img--chef" />
                            <h2>fanrie stewart</h2>
                            <p>co-founder</p>
                        </div>
                    </div>
                </div>


                <img src={require("../../components/img/iten-1.png")} className="icon-1" alt="icon" />
                <img src={require("../../components/img/iten-6.png")} className="icon-6" alt="icon" />
                <img src={require("../../components/img/iten-2.png")} className="icon-2" alt="icon" />
            </div>
            <div className="statistics">
                
            </div>
        </>

    )
}

export default About;