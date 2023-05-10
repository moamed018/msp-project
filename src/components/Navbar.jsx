/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo-white.png";

const Navbar = ({ color, logoWhite }) => {
    return (
        <nav
            className={`navbar ${
                logoWhite && "navbar-white"
            } container navbar-expand-lg mb-2`}
            style={{
                zIndex: "300",
                position: "relative",
                color: color && color,
            }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img
                        src={logoWhite ? LogoWhite : Logo}
                        alt="logo"
                        className="navbar-logo w-md-100 w-75"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/home"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/home"
                            >
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/history"
                            >
                                History
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/news"
                            >
                                News
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/events"
                            >
                                Events
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/committees"
                            >
                                Committies
                            </Link>
                        </li>
                    </ul>

                    <ul
                        className="navbar-nav  mb-2 mb-lg-0 navbar-actions align-items-lg-center align-items-stretch"
                        style={{ marginRight: "0px !important" }}
                    >
                        <li className="nav-item px-lg-2 mx-md-2">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/"
                                style={{ color: color && color }}
                            >
                                Login
                            </Link>
                        </li>

                        <li
                            className="nav-item btn py-1 px-xl-3 px-0"
                            style={{
                                backgroundColor: "#3F0343",
                            }}
                        >
                            <Link
                                style={{
                                    color: "#FFF",
                                }}
                                className="nav-link"
                                aria-current="page"
                                to="/signup"
                            >
                                Create Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
