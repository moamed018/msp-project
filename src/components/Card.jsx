/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Card = ({ imgSrc, cardTitle, cardText, href, linkText }) => {
    return (
        <div
            className="card p-0 border-0 rounded-3 overflow-hidden"
            style={{ width: "34rem", backgroundColor: "#7B1C8014" }}
        >
            <img
                src={imgSrc}
                className="card-img-top"
                alt={`${cardTitle} image`}
            />
            <div className="card-body d-flex flex-column ps-4">
                <h5
                    className="card-title my-3"
                    style={{
                        fontSize: "1.8rem",
                        fontWeight: "700",
                    }}
                >
                    {cardTitle}
                </h5>
                <p
                    className="card-text mb-4"
                    style={{
                        fontSize: "1.55rem",
                        fontWeight: "400",
                    }}
                >
                    {cardText}
                </p>
                <Link
                    to={href}
                    className="btn btn-primary align-self-end rounded-pill px-5"
                    style={{
                        fontSize: "1.4rem",
                    }}
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default Card;
