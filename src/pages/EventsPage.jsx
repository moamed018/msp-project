/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";

import Hero from "./../components/Hero";
import Footer from "./../components/Footer";

import data from "../data/events.json";
import Card from "../components/Card";

const EventsPage = () => {
    const { years, data: eventsData } = data;
    const [year, setYear] = useState("2023/2022");
    const [events, setEvents] = useState([]);

    useEffect(() => {
        document.title = "MSP | Events";
        window.scrollTo(0, 600);
    }, []);

    useEffect(() => {
        setEvents(eventsData.filter((event) => event.year === year));
        
    }, [eventsData, year]);

    return (
        <Fragment>
            <Hero />
            <div
                className="events container ps-5 pe-4"
                style={{ marginTop: "5rem", marginBottom: "5rem" }}
            >
                <header
                    className="events__header d-flex justify-content-between align-items-lg-center align-items-start gap-2 flex-lg-row flex-column"
                    style={{ marginBottom: "4rem" }}
                >
                    <div className="events__text">
                        <h2
                            className="text-black fw-semibold mb-0"
                            style={{ fontSize: "2.8rem" }}
                        >
                            Get to know our events and camps !
                        </h2>
                        <h3
                            className="text-black fw-normal"
                            style={{ fontSize: "1.8rem", textAlign: "left" }}
                        >
                            Exploring the different kinds of events we do.
                        </h3>
                    </div>

                    <select
                        className="events__select form-select w-auto rounded-pill border-0 text-white px-5 align-self-lg-auto align-self-end"
                        style={{
                            backgroundColor: "var(--main-color)",
                            fontSize: "1.6rem",
                            letterSpacing: "0.6px",
                            padding: "0.7rem 0",
                        }}
                        aria-label="Select Year"
                        defaultValue={year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        {years.map((year, index) => {
                            return (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </header>

                <h2
                    className="text-black fw-bolder mb-4"
                    style={{ fontSize: "2.8rem" }}
                >
                    Up coming events
                </h2>

                <div className=" events__content row g-5 align-items-stretch row-gap-sm-3 row-gap-md-0">
                    {events.map((event) => {
                        return (
                            <div
                                className="col p-md-2 p-lg-0 d-flex justify-content-center"
                                key={event.id}
                            >
                                <Card
                                    imgSrc={event.image}
                                    cardTitle={event.title}
                                    cardText={event.description}
                                    href={`/events/${event.id}`}
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

export default EventsPage;
