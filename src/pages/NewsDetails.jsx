import Section from "./../components/Section";
import Image from "../assets/news-image.webp";
import { useEffect } from "react";

const NewsDetails = (title) => {
    const content = `A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfilment in being involved in the design process`;

    useEffect(() => {
        document.title = `News | ${title && title && "News Heading"}`;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="news-details-page">
            <Section
                backPage="News"
                currentPage="Name of the News"
                title="Title of the News"
                bannerImage={Image}
            >
                <div className="container mb-5" style={{ fontSize: "2.2rem" }}>
                    <p>{content}</p>
                    <br />
                    <p>{content}</p>
                    <br />
                    <p>{content}</p>
                    <br />
                    <p>{content}</p>
                </div>
            </Section>
        </div>
    );
};

export default NewsDetails;
