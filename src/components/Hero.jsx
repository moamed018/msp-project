/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";

import { Link } from "react-router-dom";
import Vector from "../assets/Vector (1).png";

const Hero = () => {
    return (
        <div className="home">
            <Navbar color="#fff" logoWhite={true} />
            <div
                className="container position-relative hero"
                style={{ zIndex: "1" }}
            >
                <h1 className="heading">
                    Best <span style={{ color: "#F25123" }}>Student</span>
                    <br />
                    Digital Education Agency
                </h1>
                <p className="mt-4 w-md-50 w-100" style={{ color: " #C7C7C7" }}>
                    Many different things have evolved over the years, sometimes
                    by accident, sometimes on purpose
                </p>
                <div className="btns mt-5">
                    <Link to={"/signup"} className="join-btn text-center">
                        Join Now
                    </Link>
                    <Link
                        to={"/home"}
                        className="d-flex-inline align-items-center btn-video"
                        style={{
                            color: "#fff",
                            marginLeft: "20px",
                            textDecoration: "none",
                            fontSize: "20px",
                        }}
                    >
                        <img
                            src={Vector}
                            style={{
                                width: "30px",
                                marginRight: "10px",
                                marginTop: "-5px",
                            }}
                        />
                        Watch Video
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
