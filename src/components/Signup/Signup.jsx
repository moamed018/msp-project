/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./signupStyle.css";
import Logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import Facebook from "../../assets/Vector.png";
import Google from "../../assets/google.png";

function Signup() {
    return (
        <div className="signup-page">
            <img src={Logo} className="logo" />
            <div className="text text-light ">
                Education and self-development is very important. Let's start
                <p className="description">
                    Lorem ipsum text about login or signup on the platform
                    should come here, in two or three lines.
                </p>
            </div>

            <div className="form-dev  ">
                <form>
                    <h3 className="fw-bold text-center">Create account</h3>
                    <div className="input-container mt-5 d-flex justify-content-between gap-4">
                        <div>
                            <label htmlFor="text" className="label">
                                First name
                            </label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="position-relative">
                            <label htmlFor="text" className="last-label">
                                Last name
                            </label>
                            <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="input-container mt-4">
                        <label htmlFor="email" className="label">
                            Email adress
                        </label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="input-container mt-4">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <div className="input-container mt-4">
                        <label htmlFor="password" className="label">
                            Confirm password
                        </label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <div className="check">
                        <div className="possition-relative">
                            <input
                                type="checkbox"
                                className="custom-control custom-checkbox"
                                id="check"
                            ></input>
                            <label
                                htmlFor="check"
                                className="custom-input-lable"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <Link to="/" className="btn-create">
                            Create New Account
                        </Link>
                    </div>
                    <div className="signin-container">
                        <p>Already have an account?</p>
                        <Link to="/">Sign In</Link>
                    </div>
                    <span className="continue">or continue with</span>
                    <div className="media-btn">
                        <button className="icon-btn">
                            <img src={Google} className="17-w" />
                            Google
                        </button>
                        <button className="icon-btn">
                            <img src={Facebook} className="17-w" />
                            Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
