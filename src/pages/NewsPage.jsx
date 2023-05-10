/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";

import data from "../data/news.json";
import Card from "../components/Card";

const NewsPage = () => {
    const [news, setNews] = useState([]);
    window.scrollTo(0, 600);

    useEffect(() => {
        document.title = "MSP | News";
        setNews(data);
    }, []);

    return (
        <Fragment>
            <Hero />
            <div
                className="news container ps-5 pe-4"
                style={{ marginTop: "5rem", marginBottom: "5rem" }}
            >
                <header
                    className="news__header "
                    style={{ marginBottom: "4rem" }}
                >
                    <h2
                        className="text-black fw-semibold mb-0"
                        style={{ fontSize: "2.8rem" }}
                    >
                        Get to know our news and updates !
                    </h2>
                    <h3
                        className="text-black fw-normal"
                        style={{ fontSize: "1.8rem", textAlign: "left" }}
                    >
                        engaging with our family and community.
                    </h3>
                </header>

                <div className=" news__content row g-5 align-items-stretch row-gap-sm-3 row-gap-md-0">
                    {news.map((ele) => {
                        return (
                            <div
                                className="col p-md-2 p-lg-0 d-flex justify-content-center"
                                key={ele.id}
                            >
                                <Card
                                    imgSrc={ele.image}
                                    cardTitle={ele.title}
                                    cardText={ele.description}
                                    href={`/news/${ele.id}`}
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

export default NewsPage;
