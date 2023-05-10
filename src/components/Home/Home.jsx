/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Micro from "../../assets/microsoft.png";
import Voda from "../../assets/voda.png";
import Huawei from "../../assets/Huawei.png";
import Bank from "../../assets/bank.png";
import Saly from "../../assets/Saly-19.webp";
import Arrow from "../../assets/arrow.png";
import Rectangle1 from "../../assets/committees-images-1.png";
import Rectangle2 from "../../assets/committees-images-2.png";
import Rectangle3 from "../../assets/committees-images-3.png";
import Rectangle4 from "../../assets/committees-images-4.png";
import Rectangle5 from "../../assets/committees-images-6.png";
import Rectangle6 from "../../assets/committees-images-5.png";
import Man from "../../assets/man.png";
import Man1 from "../../assets/man1 (1).png";
import Man2 from "../../assets/man2.png";
import Woman from "../../assets/woman.png";
import Woman2 from "../../assets/woman2.png";
import Pepole from "../../assets/pepole.webp";
import Icon from "../../assets/Icon.png";
import Whats from "../../assets/whats.png";
import Group from "../../assets/Group.png";
import Iphone from "../../assets/iPhone.png";
import Group1 from "../../assets/Group (1).png";
import Group3 from "../../assets/Group 1990.png";
import Group4 from "../../assets/Group 1993.png";
import Group2 from "../../assets/Group (2).png";
import Icon1 from "../../assets/Icon (1).png";
import Icon2 from "../../assets/Icon (2).png";
import Icon3 from "../../assets/Icon (3).png";
import Check from "../../assets/check.png";
import "./homeStyle.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Hero from "../Hero";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <div className="sponsers p-4 my-5 text-center">
                <div className="container">
                    <h2
                        className="m-auto"
                        style={{
                            fontSize: "40px",
                            width: "fit-content",
                            fontWeight: "600",
                        }}
                    >
                        Check out some of these
                        <br /> achievements before continuing{" "}
                    </h2>

                    <ul
                        className="d-flex gap-4 justify-content-between flex-md-row flex-column w-lg-50 w-75"
                        style={{
                            listStyle: "none",
                            color: "#0085FF",
                            margin: "30px auto",
                            width: "60%",
                        }}
                    >
                        <li className=" d-flex gap-0 flex-column ">
                            <span
                                style={{ fontSize: "32px", fontWeight: "500" }}
                            >
                                12+
                            </span>
                            <span style={{ fontSize: "14px" }}>Boot Camps</span>
                        </li>
                        <li className=" d-flex gap-0 flex-column ">
                            <span
                                style={{ fontSize: "32px", fontWeight: "500" }}
                            >
                                500+
                            </span>
                            <span style={{ fontSize: "14px" }}>Workshops</span>
                        </li>
                        <li className=" d-flex gap-0 flex-column ">
                            <span
                                style={{ fontSize: "32px", fontWeight: "500" }}
                            >
                                8+
                            </span>
                            <span style={{ fontSize: "14px" }}>
                                Educational Booths
                            </span>
                        </li>
                        <li className=" d-flex gap-0 flex-column ">
                            <span
                                style={{ fontSize: "32px", fontWeight: "500" }}
                            >
                                10+
                            </span>
                            <span style={{ fontSize: "14px" }}>Mega Event</span>
                        </li>
                    </ul>

                    <h3
                        style={{
                            fontSize: "24",
                            fontWeight: "700",
                            margin: "60px 0 30px",
                        }}
                    >
                        {" "}
                        Our main sponsors
                    </h3>

                    <div
                        className="d-flex justify-content-between align-items-center m-auto flex-md-row flex-column w-lg-50 w-75 gap-5"
                        style={{ width: "70%" }}
                    >
                        <div style={{ width: "80px", heihgt: "80px" }}>
                            <img src={Voda} className="w-100" />
                        </div>
                        <div style={{ width: "80px", heihgt: "80px" }}>
                            <img src={Huawei} className="w-100" />
                        </div>
                        <div style={{ width: "80px", heihgt: "80px" }}>
                            <img src={Micro} className="w-100" />
                        </div>
                        <div style={{ width: "200px", heihgt: "200px" }}>
                            <img src={Bank} className="w-100" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 d-flex justify-content-between align-items-center flex-lg-row flex-column ">
                <div className=" content col-lg-5 col-12 my-lg-0 my-5">
                    <span
                        style={{
                            color: "#01A4F1",
                            fontSize: "24px",
                            fontWeight: "700",
                        }}
                    >
                        WHAT WE DO
                    </span>
                    <h3
                        style={{
                            textAlign: "left",
                            fontSize: "40px",
                            fontWeight: "600",
                        }}
                    >
                        We are here to help you
                        <br /> develop yourself
                    </h3>
                    <p
                        style={{
                            color: "#515151",
                            fontSize: "16px",
                            marginTop: "10px",
                            marginBottom: "25px",
                        }}
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit of
                        the
                        <br /> voluptatem accusantium lorem sit doloremque,
                        totam rem
                        <br /> aperiam, eaque ipsa quae ab illo invento
                        veritatis quasi
                        <br /> architecto beatae vitae dicta.
                    </p>
                    <Link to={"/home"} className="join-btn">
                        Explore all service
                    </Link>
                </div>

                <div className="boxes row justify-content-sm-start justify-content-center col-lg-7 col-12">
                    <div
                        className="box one col-sm-6 col-10 text-center"
                        style={{ borderRadius: "15px", padding: "20px" }}
                    >
                        <img
                            src={Icon}
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#E9F6EE",
                                borderRadius: "50%",
                            }}
                            className="my-3"
                        />
                        <h4 style={{ fontSize: "20px", fontWeight: "600" }}>
                            Digital Marketing
                        </h4>
                        <p style={{ color: "#747474", fontSize: "13px" }}>
                            That is the simply dummy text the printing and
                            typesetting industry.
                        </p>
                        <Link
                            to="/home"
                            style={{ color: "#3D3D3F", fontSize: "12px" }}
                        >
                            Read More
                        </Link>
                    </div>
                    <div
                        className="box two col-sm-6 col-10 text-center"
                        style={{ borderRadius: "15px", padding: "20px" }}
                    >
                        <img
                            src={Icon1}
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#E9F6EE",
                                borderRadius: "50%",
                            }}
                            className="my-3"
                        />
                        <h4 style={{ fontSize: "20px", fontWeight: "600" }}>
                            Mobile Development
                        </h4>
                        <p style={{ color: "#747474", fontSize: "13px" }}>
                            That is the simply dummy text the printing and
                            typesetting industry.
                        </p>
                        <Link
                            to="/home"
                            style={{ color: "#3D3D3F", fontSize: "12px" }}
                        >
                            Read More
                        </Link>
                    </div>
                    <div
                        className="box three col-sm-6 col-10 text-center"
                        style={{ borderRadius: "15px", padding: "20px" }}
                    >
                        <img
                            src={Icon2}
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#E9F6EE",
                                borderRadius: "50%",
                            }}
                            className="my-3"
                        />
                        <h4 style={{ fontSize: "20px", fontWeight: "600" }}>
                            UI UX Design
                        </h4>
                        <p style={{ color: "#747474", fontSize: "13px" }}>
                            That is the simply dummy text the printing and
                            typesetting industry.
                        </p>
                        <Link
                            to="/home"
                            style={{ color: "#3D3D3F", fontSize: "12px" }}
                        >
                            Read More
                        </Link>
                    </div>
                    <div
                        className="box four col-sm-6 col-10 text-center"
                        style={{ borderRadius: "15px", padding: "20px" }}
                    >
                        <img
                            src={Icon3}
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#E9F6EE",
                                borderRadius: "50%",
                            }}
                            className="my-3"
                        />
                        <h4 style={{ fontSize: "20px", fontWeight: "600" }}>
                            Web Development
                        </h4>
                        <p style={{ color: "#747474", fontSize: "13px" }}>
                            That is the simply dummy text the printing and
                            typesetting industry.
                        </p>
                        <Link
                            to="/home"
                            style={{ color: "#3D3D3F", fontSize: "12px" }}
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container my-5 d-flex justify-content-between align-items-center flex-lg-row flex-column ">
                <div className="about-content w-100">
                    <span
                        style={{
                            color: "#01A4F1",
                            fontSize: "24px",
                            fontWeight: "700",
                        }}
                    >
                        ABOUT US
                    </span>
                    <h3
                        style={{
                            textAlign: "left",
                            fontSize: "40px",
                            fontWeight: "600",
                        }}
                    >
                        We are more than just a digital <br /> student activity
                        in the world
                    </h3>
                    <p
                        style={{
                            color: "#515151",
                            fontSize: "16px",
                            marginTop: "10px",
                            marginBottom: "25px",
                        }}
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit of
                        the
                        <br /> voluptatem accusantium lorem sit doloremque,
                        totam rem
                        <br /> aperiam, eaque ipsa quae ab illo invento
                        veritatis quasi
                        <br /> architecto beatae vitae dicta.
                    </p>
                    <Link to={"/home"} className="join-btn ">
                        Get in touch
                    </Link>
                </div>
                <div className="about-img-div row w-lg-100 w-75">
                    <img
                        src={Saly}
                        style={{ width: "800px" }}
                        className="col-12"
                    />
                </div>
            </div>

            <div className="work container my-5">
                <span
                    style={{
                        color: "#01A4F1",
                        fontSize: "24px",
                        fontWeight: "700",
                    }}
                >
                    Members Our Work
                </span>
                <h3
                    style={{
                        textAlign: "left",
                        fontSize: "40px",
                        fontWeight: "600",
                    }}
                >
                    See Our Recent Case Studies
                </h3>

                <div className="nav nav-tabs d-flex justify-content-between align-items-center mt-4 gap-2">
                    <ul
                        className="nav nav-tabs  "
                        style={{ listStyle: "none" }}
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                data-bs-toggle="tab"
                                data-bs-target="#ui-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="ui-tab-pane"
                                aria-selected="true"
                            >
                                UI/UX
                            </button>
                        </li>

                        <li
                            className="nav-item"
                            role="presentation"
                            style={{
                                color: "#cccccc",
                                fontSize: "16px",
                                fontWeight: "600",
                            }}
                        >
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#development-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="development-tab-pane"
                                aria-selected="true"
                            >
                                Development
                            </button>
                        </li>

                        <li
                            className="nav-item"
                            role="presentation"
                            style={{
                                color: "#cccccc",
                                fontSize: "16px",
                                fontWeight: "600",
                            }}
                        >
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#graphic-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="graphic-tab-pane"
                                aria-selected="true"
                            >
                                Graphic Design
                            </button>
                        </li>

                        <li
                            className="nav-item"
                            role="presentation"
                            style={{
                                color: "#cccccc",
                                fontSize: "16px",
                                fontWeight: "600",
                            }}
                        >
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#motion-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="motion-tab-pane"
                                aria-selected="true"
                            >
                                Motion
                            </button>
                        </li>

                        <li
                            className="nav-item"
                            role="presentation"
                            style={{
                                color: "#cccccc",
                                fontSize: "16px",
                                fontWeight: "600",
                            }}
                        >
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#photography-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="photography-tab-pane"
                                aria-selected="true"
                            >
                                Photography
                            </button>
                        </li>

                        <li
                            className="nav-item"
                            role="presentation"
                            style={{
                                color: "#cccccc",
                                fontSize: "16px",
                                fontWeight: "600",
                            }}
                        >
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#video-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="video-tab-pane"
                                aria-selected="true"
                            >
                                Video Editing
                            </button>
                        </li>
                    </ul>
                    <Link
                        to="/home"
                        style={{
                            color: "#000",
                            fontSize: "16px",
                            fontWeight: "600",
                            textDecoration: "none",
                            paddingLeft: "6px",
                        }}
                    >
                        Explore all
                        <img
                            style={{ width: "20px" }}
                            src={Arrow}
                            alt="arrow"
                        />
                    </Link>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="ui-tab-pane"
                        role="tabpanel"
                        aria-labelledby="ui-tab"
                        tabIndex="0"
                    >
                        <div className="row mt-4">
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle1}
                                    alt="project"
                                    className=""
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle2}
                                    alt="project"
                                    className=""
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle3}
                                    alt="project"
                                    className=""
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle4}
                                    alt="project"
                                    className=""
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle5}
                                    alt="project"
                                    className=""
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle6}
                                    alt="project"
                                    className=""
                                />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="tab-pane fade"
                        id="development-tab-pane"
                        role="tabpanel"
                        aria-labelledby="development-tab"
                        tabIndex="0"
                    >
                        <div className="row mt-4">
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle2}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle3}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle1}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle5}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle4}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle6}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="tab-pane fade"
                        id="graphic-tab-pane"
                        role="tabpanel"
                        aria-labelledby="graphic-tab"
                        tabIndex="0"
                    >
                        <div className="row mt-4">
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle1}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle5}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle2}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle4}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle3}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle6}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="tab-pane fade"
                        id="motion-tab-pane"
                        role="tabpanel"
                        aria-labelledby="motion-tab"
                        tabIndex="0"
                    >
                        <div className="row mt-4">
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle6}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle2}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle3}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle1}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle5}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle4}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="tab-pane fade"
                        id="photography-tab-pane"
                        role="tabpanel"
                        aria-labelledby="photography-tab"
                        tabIndex="0"
                    >
                        <div className="row mt-4">
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle1}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle2}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle3}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle4}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle5}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle6}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="tab-pane fade"
                        id="video-tab-pane"
                        role="tabpanel"
                        aria-labelledby="video-tab"
                        tabIndex="0"
                    >
                        <div className="row mt-4">
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle1}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle5}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle3}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle4}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle6}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                            <Link className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
                                <img
                                    src={Rectangle2}
                                    alt="project"
                                    // className="w-100"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial container my-5">
                <span
                    style={{
                        color: "#01A4F1",
                        fontSize: "24px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                    }}
                >
                    testimonial
                </span>
                <h3
                    style={{
                        textAlign: "left",
                        fontSize: "40px",
                        fontWeight: "600",
                    }}
                >
                    What do our students say?
                    <br /> about us
                </h3>

                <div className="d-flex justify-content-between mt-3 align-items-center flex-md-row flex-column">
                    <div className="mb-md-0 mb-5">
                        <div className="d-flex  gap-3 align-items-center">
                            <img
                                src={Man}
                                style={{ width: "90px", height: "90px" }}
                            />
                            <div>
                                <h5
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: "700",
                                    }}
                                >
                                    Mohamed Magdy
                                </h5>
                                <span
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        color: "#3D3D3F",
                                    }}
                                >
                                    UI/UX Designer
                                </span>
                            </div>
                        </div>
                        <p
                            style={{
                                color: "#757575",
                                fontWeight: "600",
                                marginTop: "20px",
                            }}
                        >
                            They work hard. It's been beautifully developed by
                            <br /> the MSP team. We really appreciated the quick
                            and
                            <br /> mighty effort. Thank you MSP AI-Azhar
                        </p>
                    </div>

                    <div>
                        <img
                            src={Pepole}
                            className="img-testimonial"
                            style={{ width: "370px" }}
                        />
                    </div>
                </div>
            </div>

            <div className="team container my-5">
                <h3
                    style={{
                        fontSize: "24",
                        fontWeight: "700",
                        margin: "30px 0",
                    }}
                >
                    {" "}
                    Met Our Team
                </h3>
                <p
                    style={{
                        color: "#ccc",
                        textAlign: "center",
                        width: "50%",
                        margin: "auto",
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis accumsan nisi Ut ut felis congue nisl hendrerit
                    commodo.
                </p>

                <div className=" row justify-content-lg-between justify-content-center my-4 gap-lg-0 gap-md-2 gap-5">
                    <div
                        className="team-div col-lg-3 col-sm-5 col-8"
                        style={{
                            backgroundColor: "rgba(0, 70, 255, 0.2)",
                            textAlign: "center",
                            borderRadius: "15px",
                            // width: "24%",
                            padding: "15px",
                            boxShadow: "0px 22px 18px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <img
                            src={Man1}
                            style={{
                                width: "100px",
                                height: "100px",
                                marginTop: "20px",
                            }}
                        />
                        <h3 style={{ marginTop: "-20px" }}>Ragb</h3>
                        <p
                            style={{
                                textTransform: "uppercase",
                                marginTop: "-10px",
                            }}
                        >
                            Head of Development
                        </p>

                        <div className="d-flex gap-3 justify-content-center">
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group1}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Whats}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group2}
                            />
                        </div>
                    </div>

                    <div
                        className="team-div col-lg-3 col-sm-5 col-8"
                        style={{
                            backgroundColor: "rgba(0, 70, 255, 0.2)",
                            textAlign: "center",
                            borderRadius: "15px",
                            // width: "22%",
                            padding: "15px",
                            boxShadow: "0px 22px 18px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <img
                            src={Woman}
                            style={{
                                width: "100px",
                                height: "100px",
                                marginTop: "20px",
                            }}
                        />
                        <h3 style={{ marginTop: "-20px" }}>Sara moh</h3>
                        <p
                            style={{
                                textTransform: "uppercase",
                                marginTop: "-10px",
                            }}
                        >
                            Head of UX/UI DESIGNER
                        </p>

                        <div className="d-flex gap-3 justify-content-center">
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group1}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Whats}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group2}
                            />
                        </div>
                    </div>

                    <div
                        className="team-div col-lg-3 col-sm-5 col-8"
                        style={{
                            backgroundColor: "rgba(0, 70, 255, 0.2)",
                            textAlign: "center",
                            borderRadius: "15px",
                            // width: "22%",
                            padding: "15px",
                            boxShadow: "0px 22px 18px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <img
                            src={Man2}
                            style={{
                                width: "100px",
                                height: "100px",
                                marginTop: "20px",
                            }}
                        />
                        <h3 style={{ marginTop: "-20px" }}>Mohamed</h3>
                        <p
                            style={{
                                textTransform: "uppercase",
                                marginTop: "-10px",
                            }}
                        >
                            Head of Development
                        </p>

                        <div className="d-flex gap-3 justify-content-center">
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group1}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Whats}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group2}
                            />
                        </div>
                    </div>

                    <div
                        className="team-div col-lg-3 col-sm-5 col-8"
                        style={{
                            backgroundColor: "rgba(0, 70, 255, 0.2)",
                            textAlign: "center",
                            borderRadius: "15px",
                            // width: "22%",
                            padding: "15px",
                            boxShadow: "0px 22px 18px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <img
                            src={Woman2}
                            style={{
                                width: "100px",
                                height: "100px",
                                marginTop: "20px",
                            }}
                        />
                        <h3 style={{ marginTop: "-20px" }}>Marim</h3>
                        <p
                            style={{
                                textTransform: "uppercase",
                                marginTop: "-10px",
                            }}
                        >
                            Head of Development
                        </p>

                        <div className="d-flex gap-3 justify-content-center">
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group1}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Whats}
                            />
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={Group2}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="phone container my-5 gap-5 d-flex justify-content-between align-items-center flex-lg-row flex-column">
                <div className="d-lg-block d-none">
                    <img src={Iphone} style={{ width: "400px" }} />
                </div>
                <div className="w-lg-50 w-100">
                    <h2>Download Our App</h2>
                    <p style={{ color: "#ccc", marginTop: "15px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <ul style={{ listStyle: "none", padding: "0" }}>
                        <li>
                            <img
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    margin: "10px 10px 10px 0",
                                }}
                                src={Check}
                            />
                            Best Deals
                        </li>
                        <li>
                            <img
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    margin: "10px 10px 10px 0",
                                }}
                                src={Check}
                            />
                        </li>
                        <li>
                            <img
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    margin: "10px 10px 10px 0",
                                }}
                                src={Check}
                            />
                        </li>
                        <li>
                            <img
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    margin: "10px 10px 10px 0",
                                }}
                                src={Check}
                            />
                        </li>
                        <li>
                            <img
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    margin: "10px 10px 10px 0",
                                }}
                                src={Check}
                            />
                        </li>
                    </ul>

                    <div className="d-flex flex-sm-row flex-column gap-4 mt-5">
                        <img style={{ width: "200px" }} src={Group3} />
                        <img style={{ width: "200px" }} src={Group4} />
                    </div>
                </div>
            </div>

            <div className="div-subscribe container my-5">
                <h3
                    style={{
                        fontSize: "24",
                        fontWeight: "700",
                        margin: "60px 0 30px",
                    }}
                >
                    Subscribe Our News Letter
                </h3>
                <p style={{ color: "#ccc", textAlign: "center" }}>
                    You can read our news letter and get free knowledge
                </p>

                <form
                    className="d-flex gap-4 justify-content-center align-items-lg-end align-items-stretch mt-5 flex-lg-row flex-column"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="d-flex flex-column gap-3">
                        <label
                            forhtml="name"
                            style={{ color: "#11142D", fontWeight: "bold" }}
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Input your name"
                            style={{
                                padding: "10px 40px",
                                border: "1px solid #B4B4B7",
                                borderRadius: "15px",
                                outline: "none",
                            }}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <label
                            forhtml="email"
                            style={{ color: "#11142D", fontWeight: "bold" }}
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Input your email"
                            style={{
                                padding: "10px 40px",
                                border: "1px solid #B4B4B7",
                                borderRadius: "15px",
                                outline: "none",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            width: "140px",
                            marginBottom: "5px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            className="btn-submit"
                            onClick={(e) => {
                                e.currentTarget.classList.toggle("is_active");
                            }}
                        >
                            <span>Subscribe</span>
                            <div className="success">
                                <svg
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    viewBox="0 0 29.756 29.756"
                                    style={{
                                        enableBackground:
                                            "new 0 0 29.756 29.756",
                                    }}
                                    xmlSpace="preserve"
                                >
                                    <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
