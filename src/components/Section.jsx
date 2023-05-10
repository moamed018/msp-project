/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const Section = ({
    backPage,
    currentPage,
    bannerImage,
    title,
    children,
    titleSection,
}) => {
    return (
        <Fragment>
            <header className="container ">
                <Navbar />
                <div className="d-flex align-items-center mb-5">
                    <Link
                        className="px-2 me-4 btn not-hover"
                        to={`/${backPage.toLowerCase()}`}
                    >
                        <span className="back pe-1">&lt; </span>
                        <span>{backPage}</span>
                    </Link>
                    <p className="mb-0 text-secondary">{currentPage}</p>
                </div>
                {titleSection && (
                    <h2 className="mb-5 ps-4 fw-bold text-secondary-emphasis">
                        {titleSection}
                    </h2>
                )}
            </header>
            <div className="banner-div mb-5">
                <img src={bannerImage} alt={title} className="w-100" />
            </div>
            <h1 className="text-secondary-emphasis text-center mb-5 fw-bolder">
                {title}
            </h1>

            {children}
        </Fragment>
    );
};

export default Section;
