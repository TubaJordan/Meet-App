import { useState } from "react";

const Event = ({ event }) => {

    const [showDetails, setShowDetails] = useState(false);

    const originalDate = new Date(event.created);
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const monthName = monthNames[originalDate.getMonth()];
    const day = originalDate.getDate();
    const dayOrdinal = getDayOrdinal(day);
    const year = originalDate.getFullYear();
    const hours = originalDate.getHours();
    const minutes = originalDate.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = (hours % 12) || 12;

    const formattedDate = `${monthName} ${day}${dayOrdinal}, ${year} - ${formattedHours}:${minutes}${ampm}`;

    function getDayOrdinal(day) {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }



    return (
        <li className="event-item">
            <h3>{event.summary}</h3>

            <div className="inner-item">

                <p className="item-time">{formattedDate}</p>
                <p className="item-location">{event.location}</p>

                <div className="button-wrap">
                    <button className="detail-button" onClick={() => { setShowDetails(!showDetails) }}>
                        {showDetails ? "Hide Details" : "Show Details"}
                    </button>
                </div>
            </div>
            {showDetails ? (
                <div className="details">
                    <h4>Event Details</h4>
                    <p>Description: {event.description}</p>
                    <p>Event status: {event.status}</p>
                </div>
            ) : null}
        </li>
    );
};

export default Event;