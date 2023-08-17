import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";


const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {

    test('Event details are hidden by default.', ({ given, when, then }) => {

        given('the user has not yet selected an event', () => {

        });

        let AppComponent;
        when('the user opens the app and performs no interaction', () => {
            AppComponent = render(<App />);
        });

        then('the events details should be hidden by default', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const details = AppDOM.querySelector(".details");
            expect(details).not.toBeInTheDocument();
        });

    });


    test('User can open an event to see event specific details.', ({ given, when, then }) => {

        let AppComponent;
        given('the user has chosen an event', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector("#event-list");

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole("listitem");
                expect(EventListItems.length).toBe(32);
            })
        });

        when('the user clicks on the selected event', async () => {
            const detailsButton = AppComponent.queryAllByText("Show Details")[0];
            await userEvent.click(detailsButton);
        });

        then('the events details are opened and displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const details = AppDOM.querySelector(".details");
            expect(details).toBeInTheDocument();
        });

    });


    test('User can close an events details to return to original state.', ({ given, when, then }) => {

        let AppComponent;
        given('the user has opened an events details', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole("listitem");
                expect(eventList[0]).toBeTruthy();
            });

            let button = AppComponent.queryAllByText("Show Details")[0];
            await userEvent.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector(".details");
            expect(details).toBeInTheDocument();
        });

        when('the user clicks on the event', async () => {
            const detailsButton = AppComponent.queryAllByText("Hide Details")[0];
            await userEvent.click(detailsButton);
        });

        then('the event will close and hide the events details', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector(".details");
            expect(details).not.toBeInTheDocument();
        });

    });

})