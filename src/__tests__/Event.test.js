import { render, screen } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";

const mockEvent = mockData[0];


describe("<Event /> Component", () => {

    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
    });


    test("has the events title", () => {
        const title = EventComponent.queryByText(mockEvent.summary);
        expect(title).toBeInTheDocument();
    });

    test("has the events time", () => {
        const originalDate = new Date(mockEvent.created);
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
        const formattedDate = EventComponent.queryByText(`${monthName} ${day}${dayOrdinal}, ${year} - ${formattedHours}:${minutes}${ampm}`);
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
        expect(formattedDate).toBeInTheDocument();
    });

    test("has the events location", () => {
        const location = EventComponent.queryByText(mockEvent.location);
        expect(location).toBeInTheDocument();
    })

    test("has the button 'show details'", () => {
        const button = EventComponent.queryByText("Show Details");
        expect(button).toBeInTheDocument();
    });

    test("by default event details are hidden", () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector(".details");
        expect(details).not.toBeInTheDocument();
    });

    test("show details after user clicks button 'show details'", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText("Show Details");
        await user.click(button);

        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector(".details");
        expect(details).toBeInTheDocument();
    });

    test("hide details after user clicks the button 'hide details'", async () => {
        const button = EventComponent.queryByText("Show Details");
        const eventDOM = EventComponent.container.firstChild;
        await userEvent.click(button);

        const hideButton = EventComponent.queryByText("Hide Details");
        await userEvent.click(hideButton);

        const details = eventDOM.querySelector(".details");
        expect(details).not.toBeInTheDocument();
    });

});