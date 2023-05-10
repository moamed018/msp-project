/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import Section from "./../components/Section";

import Image from "../assets/committees-image.webp";
import BookImage from "../assets/committees-image-book-v.png";
import Image1 from "../assets/committees-images-1.png";
import Image2 from "../assets/committees-images-2.png";
import Image3 from "../assets/committees-images-3.png";
import Image4 from "../assets/committees-images-4.png";
import Image5 from "../assets/committees-images-5.png";
import Image6 from "../assets/committees-images-6.png";
import { useEffect } from "react";

const data = [
    {
        title: "E-learning App",
        image: Image1,
    },
    {
        title: "Food delivery website",
        image: Image2,
    },
    {
        title: "Health care website",
        image: Image3,
    },
    {
        title: "E-learning App",
        image: Image4,
    },
    {
        title: "Food delivery website",
        image: Image5,
    },
    {
        title: "Health care website",
        image: Image6,
    },
];

const CommitteeDetails = (title) => {
    useEffect(() => {
        document.title = `Committees | ${
            title && title && "Committee Heading"
        }`;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="committee-details-page">
            <Section
                backPage="Committees"
                currentPage="UI/UX"
                title="UI/UX"
                titleSection="Developers section"
                bannerImage={Image}
            >
                <div className="container" style={{ marginTop: "12rem" }}>
                    <div
                        className="row justify-content-md-between justify-content-center align-items-center gap-5"
                        style={{ marginBottom: "12rem" }}
                    >
                        <div className="left" style={{ width: "fit-content" }}>
                            <h3 className="fw-bold mb-4">Job description</h3>
                            <ol>
                                <li>Do UX research</li>
                                <li>Analyze User driven data</li>
                                <li>Deliver insights </li>
                                <li>create personas, Empathy map</li>
                                <li>Create feature list</li>
                                <li>create wireframes and UI screens</li>
                                <li>conduct usability tests</li>
                            </ol>
                        </div>
                        <div
                            className="right order-md-last order-first align-self-md-auto align-self-center"
                            style={{
                                width: "240px",
                                height: "240px",
                                marginRight: "10rem",
                            }}
                        >
                            <img
                                src={BookImage}
                                alt="Book Image"
                                className="w-100"
                            />
                        </div>
                    </div>
                    <p
                        className=" text-uppercase"
                        style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#01A4F1",
                        }}
                    >
                        Previous projects
                    </p>
                    <h2
                        className=" d-flex justify-content-between align-items-end mb-5"
                        style={{
                            fontSize: "30px",
                            color: "#3D3D3F",
                            fontWeight: "600",
                        }}
                    >
                        <span>See Our Recent Case Studies</span>
                        <Link
                            to="/"
                            style={{ fontSize: "12px", textDecoration: "none" }}
                        >
                            Explore all &rarr;
                        </Link>
                    </h2>

                    <div
                        className="row row-gap-5"
                        style={{ marginBottom: "6rem" }}
                    >
                        {data.map((item, index) => {
                            return (
                                <Link
                                    className="col-md-4 col-sm-6 col-12 text-decoration-none"
                                    key={index}
                                >
                                    <div className="card border-0">
                                        <div className="card-body p-0">
                                            <img
                                                src={item.image}
                                                className="card-img-top"
                                                alt="Card image cap"
                                            />
                                            <h5
                                                className="card-title"
                                                style={{
                                                    fontSize: "1.8rem",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {item.title}
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="row justify-content-center mb-5">
                        <Link
                            to="/"
                            className="btn btn-primary col-md-2 col-6 px-4 py-2 rounded-3"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default CommitteeDetails;
