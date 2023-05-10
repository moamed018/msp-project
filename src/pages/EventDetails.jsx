import Section from "./../components/Section";
import Image from "../assets/events-image.webp";
import { useEffect } from "react";

const EventDetails = (title) => {
    const content = `A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfilment in being involved in the design process`;

    useEffect(() => {
        document.title = `Events | ${title && title && "Event Heading"}`;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="event-details-page">
            <Section
                backPage="Events"
                currentPage="Name of the Event"
                title="Title of the Event 5/10/2022"
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

export default EventDetails;
