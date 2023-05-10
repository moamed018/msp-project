/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo-white.png";
import MessageIcon from "../assets/icons/message.png";
import CallingIcon from "../assets/icons/calling.png";
import LocationIcon from "../assets/icons/location.png";

const date = new Date();

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <ul
                    className="row mb-0 justify-content-between"
                    style={{ rowGap: "6.8rem" }}
                >
                    <li className="col col-md-3 text-white-50 me-5">
                        <ul className="list-items">
                            <li>
                                <img src={Logo} alt="Logo" />
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                                <img src={LocationIcon} alt="Icon" />
                                Nasr City, Cairo
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                                <img src={CallingIcon} alt="Icon" />
                                <a href="tel:+201282806994">01282806994</a>
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                                <img src={MessageIcon} alt="Icon" />
                                <a href="mailto:support@msp.com">
                                    support@msp.com
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="col col-auto text-white">
                        <h4
                            className="fw-semibold"
                            style={{ marginBottom: "2.6rem" }}
                        >
                            Service
                        </h4>
                        <ul className="list-items">
                            <li>
                                <Link to="/home">UI UX Design</Link>
                            </li>
                            <li>
                                <Link to="/home">Mobile Development</Link>
                            </li>
                            <li>
                                <Link to="/home">Motion Graphic</Link>
                            </li>
                            <li>
                                <Link to="/home">Web Development</Link>
                            </li>
                            <li>
                                <Link to="/home">Digital Marketing</Link>
                            </li>
                            <li>
                                <Link to="/home">Video Editing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="col col-auto text-white">
                        <h4
                            className="fw-semibold"
                            style={{ marginBottom: "2.6rem" }}
                        >
                            Company
                        </h4>
                        <ul className="list-items">
                            <li>
                                <Link to="/home">Service</Link>
                            </li>
                            <li>
                                <Link to="/home">Our Team</Link>
                            </li>
                            <li>
                                <Link to="/home">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/home">Our trusted partner</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="col col-auto text-white">
                        <h4
                            className="fw-semibold"
                            style={{ marginBottom: "2.6rem" }}
                        >
                            Supports
                        </h4>
                        <ul className="list-items">
                            <li>
                                <Link to="/home">Help center</Link>
                            </li>
                            <li>
                                <Link to="/home">Feedback</Link>
                            </li>
                            <li>
                                <Link to="/home">Contact us</Link>
                            </li>
                            <li>
                                <Link to="/home">Terms conditins</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="col col-auto text-white">
                        <h4
                            className="fw-semibold"
                            style={{ marginBottom: "2.6rem" }}
                        >
                            Our Social Media
                        </h4>
                        <ul className="list-items">
                            <li>
                                <a href="https://www.facebook.com/AlAzharTC">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/msp-tech-club-al-azhar-university/">
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mspalazhar/">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCnrCvhZJDpijR61BNo0rk9Q">
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <div className="container py-4 d-flex justify-content-between flex-wrap gap-3">
                    <p className="mb-0">
                        © {date.getFullYear()} msp - All rights reserved.
                    </p>
                    <ul className="d-flex gap-md-5 gap-3 mb-0 ps-0 flex-wrap">
                        <li>
                            <Link to="/home">Privacy</Link>
                        </li>
                        <li>
                            <Link to="/home">Security</Link>
                        </li>
                        <li>
                            <Link to="/home">Terms</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
