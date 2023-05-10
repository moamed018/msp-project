/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./loginStyle.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-white.png";
import Facebook from "../../assets/Vector.png";
import Google from "../../assets/google.png";

function Login() {
    return (
        <div className="login">
            <img src={Logo} className="logo" />
            <div className="text">
                Education and self-development is very important. Let's start
                <p className="description">
                    Lorem ipsum text about login or signup on the platform
                    should come here, in two or three lines.
                </p>
            </div>

            <div className="form-dev">
                <form>
                    <h3>Log in</h3>
                    <div className="input-container mt-5">
                        <label htmlFor="email" className="label">
                            Username
                        </label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="input-container mt-4">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <div className="check flex-sm-row flex-column">
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
                                Keep me signed in
                            </label>
                        </div>
                        <div>
                            <a href="" className="small">
                                Forget Password?
                            </a>
                        </div>
                    </div>
                    <div className="d-grid">
                        <Link to="/home" className="btn-login">
                            Log In
                        </Link>
                    </div>
                    <div className="signin-container">
                        <p>Don't have an account?</p>
                        <Link to="/signup">Sign Up</Link>
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

export default Login;
