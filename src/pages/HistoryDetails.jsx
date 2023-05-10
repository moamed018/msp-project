/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import Section from "./../components/Section";
import Image from "../assets/history-image.webp";

import Image1 from "../assets/history-images-1.png";
import Image2 from "../assets/history-images-2.png";
import Image3 from "../assets/history-images-3.png";
import Card from "../components/Card";
import { useEffect } from "react";

const HistoryDetails = (title) => {
    useEffect(() => {
        document.title = `History | ${title && title && "History Heading"}`;
        window.scrollTo(0, 0);
    }, [title]);

    const arrayImages = [Image1, Image2, Image3];
    return (
        <div className="history-details-page">
            <Section
                backPage="History"
                currentPage="Achievements"
                title="Title of the Achievement"
                bannerImage={Image}
            >
                <div className="container" style={{ marginBottom: "6.4rem" }}>
                    <h3
                        style={{ fontSize: "2rem", fontWeight: "700" }}
                        className="mb-3"
                    >
                        About
                    </h3>
                    <p>
                        A UI/UX designer's job is to create user-friendly
                        interfaces that enable users to understand how to use
                        complex technical products. If you're passionate about
                        the latest technology trends and devices, you'll find
                        great fulfilment in being involved in the design process
                    </p>
                </div>

                <div className="container">
                    <h2
                        style={{ fontSize: "2.6rem", fontWeight: "400" }}
                        className="mb-4"
                    >
                        See Other Achivements
                    </h2>

                    <div className="row g-4 align-items-stretch row-gap-sm-3 row-gap-md-0 mb-5">
                        {arrayImages.map((item, index) => {
                            return (
                                <div
                                    className="col p-md-2 p-lg-0 d-flex justify-content-center"
                                    key={index}
                                >
                                    <Card
                                        imgSrc={item}
                                        cardTitle="Headline"
                                        cardText="to give a hint of what the
                                    achievements is about"
                                        href="/"
                                        linkText="View more"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default HistoryDetails;

/**


<div className="row justify-content-xl-between justify-content-md-evenly justify-content-center gap-5 mb-5">
                        {arrayImages.map((item, index) => {
                            return (
                                <div
                                    className="card p-0"
                                    style={{ width: "34rem", border: "none" }}
                                    key={index}
                                >
                                    <img
                                        src={item}
                                        className="card-img-top"
                                        alt="Headline"
                                    />
                                    <div className="card-body d-flex flex-column ps-4">
                                        <h5
                                            className="card-title my-3"
                                            style={{
                                                fontSize: "1.8rem",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Headline
                                        </h5>
                                        <p
                                            className="card-text mb-4"
                                            style={{
                                                fontSize: "1.55rem",
                                                fontWeight: "400",
                                            }}
                                        >
                                            to give a hint of what the
                                            achievements is about
                                        </p>
                                        <Link
                                            to="/"
                                            className="btn btn-primary align-self-end rounded-pill px-5"
                                            style={{
                                                fontSize: "1.4rem",
                                            }}
                                        >
                                            View more
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


*/
