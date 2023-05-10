/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";

import Hero from "./../components/Hero";
import Footer from "./../components/Footer";

import data from "../data/history.json";
import Card from "../components/Card";

const HistoryPage = () => {
    const { years, data: historyData } = data;
    const [year, setYear] = useState("2023");
    const [history, setHistory] = useState([]);

    useEffect(() => {
        document.title = "MSP | History";
        window.scrollTo(0, 600);
    }, []);

    useEffect(() => {
        setHistory(historyData.filter((his) => his.year === year));
    }, [historyData, year]);

    return (
        <Fragment>
            <Hero />
            <div
                className="history container ps-5 pe-4"
                style={{ marginTop: "5rem", marginBottom: "5rem" }}
            >
                <div className="row justify-content-around align-items-center mb-5 pb-5 flex-md-row flex-column gap-md-0 gap-5">
                    <div className="col-md-4 col-10">
                        <h3
                            className="text-center mb-md-4 mb-2 fw-bold"
                            style={{ color: "#01A4F1" }}
                        >
                            Story
                        </h3>
                        <p className=" text-black fw-semibold">
                            Lorem ipsum dolor sit amet consectetur. Aliquet.
                            hjgj jgd combe mtek ngfj
                        </p>
                    </div>

                    <div className="col-md-4 col-10">
                        <h3
                            className="text-center mb-md-4 mb-2 fw-bold"
                            style={{ color: "#01A4F1" }}
                        >
                            Founders
                        </h3>
                        <p className=" text-black fw-semibold">
                            Lorem ipsum dolor sit amet consectetur. Aliquet.
                            hjgj jgd combe mtek ngfj
                        </p>
                    </div>
                </div>

                <header
                    className="history__header d-flex justify-content-between align-items-lg-center align-items-start gap-2 flex-lg-row flex-column"
                    style={{ marginBottom: "4rem" }}
                >
                    <h2
                        className="text-black-50 fw-semibold mb-0"
                        style={{ fontSize: "2.8rem" }}
                    >
                        Get to know our achivements
                    </h2>

                    <select
                        className="history__select form-select w-auto rounded-pill border-0 text-white px-5 align-self-lg-auto align-self-end text-center ps-3"
                        style={{
                            backgroundColor: "var(--main-color)",
                            fontSize: "1.6rem",
                            letterSpacing: "0.6px",
                            padding: "0.7rem 0",
                        }}
                        aria-label="Select Year"
                        defaultValue={"choose"}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option
                            key={"i"}
                            value="choose"
                            disabled
                            style={{ color: "#999" }}
                        >
                            Choose a year
                        </option>
                        {years.map((year, index) => {
                            return (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </header>

                <div className=" history__content row g-5 align-items-stretch row-gap-sm-3 row-gap-md-0">
                    {history.map((his) => {
                        return (
                            <div
                                className="col p-md-2 p-lg-0 d-flex justify-content-center"
                                key={his.id}
                            >
                                <Card
                                    imgSrc={his.image}
                                    cardTitle={his.title}
                                    cardText={his.description}
                                    href={`/history/${his.id}`}
                                    linkText="View more"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default HistoryPage;
