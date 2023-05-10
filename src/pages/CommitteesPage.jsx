/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";

import data from "../data/committees";
import { Link } from "react-router-dom";

const CommitteesPage = () => {
    const [committees, setCommittees] = useState([]);

    useEffect(() => {
        document.title = "MSP | Committees";
        setCommittees(data);
        window.scrollTo(0, 600);
    }, []);

    return (
        <Fragment>
            <Hero />
            <div
                className="committees container ps-5 pe-4"
                style={{ marginTop: "5rem", marginBottom: "5rem" }}
            >
                <header
                    className="committees__header "
                    style={{ marginBottom: "7rem" }}
                >
                    <h2
                        className="text-black fw-semibold mb-0"
                        style={{ fontSize: "2.8rem" }}
                    >
                        Get to know our committees and join
                    </h2>
                    <h3
                        className="text-black fw-normal"
                        style={{ fontSize: "1.8rem", textAlign: "left" }}
                    >
                        Exploring the different committees and what they do.
                    </h3>
                </header>

                <div className="committees__content">
                    {committees.map((c, i) => {
                        return (
                            <div className="committee mb-5 pb-5" key={i}>
                                <h3
                                    className=" text-black fw-bold mb-3"
                                    style={{ fontSize: "2.2rem" }}
                                >
                                    {c.sectionTitle}
                                </h3>

                                <div className="row g-4 align-items-stretch mx-auto ps-3 row-gap-sm-3 row-gap-md-0 column-gap-1">
                                    {c.committees.map((committee, index) => {
                                        return (
                                            <div
                                                className="col p-md-2 p-lg-0 d-flex justify-content-sm-start justify-content-center"
                                                key={index}
                                            >
                                                <div
                                                    className="card p-5 border-0 rounded-3 overflow-hidden d-flex flex-column align-items-center"
                                                    style={{
                                                        width: "30rem",
                                                        backgroundColor:
                                                            "#7B1C8014",
                                                    }}
                                                >
                                                    <img
                                                        src={committee.image}
                                                        className="card-img-top"
                                                        alt={`${committee.name} image`}
                                                        style={{
                                                            width: "100px",
                                                            height: "100px",
                                                            borderRadius: "50%",
                                                        }}
                                                    />
                                                    <div className="card-body d-flex flex-column align-items-center justify-content-between gap-3 pt-1">
                                                        <h5
                                                            className="card-title my-3 text-black"
                                                            style={{
                                                                fontSize:
                                                                    "1.8rem",
                                                                fontWeight:
                                                                    "700",
                                                            }}
                                                        >
                                                            {committee.name}
                                                        </h5>

                                                        <Link
                                                            to={`/committees/${committee.nameUrl}`}
                                                            className="btn btn-primary rounded-pill px-5"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                            }}
                                                        >
                                                            Apply Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default CommitteesPage;
