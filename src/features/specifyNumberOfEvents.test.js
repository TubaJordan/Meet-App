import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor, fireEvent } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, test => {

    test('When user hasn\'t specified a number of events, 32 is the default number.', ({ given, when, then }) => {

        let AppComponent;
        let eventList;
        given('the user has not specified a number of events in a city', () => {
            AppComponent = render(<App />);
        });

        when('the user selects a city to view events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole("listitem");
                expect(eventList[0]).toBeTruthy();
            });
        });

        then(/^the default number will be (\d+)$/, (arg0) => {
            expect(eventList.length).toEqual(32);
        });

    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {

        let AppComponent;
        given('the user wants to view a specific number of events', () => {
            AppComponent = render(<App />);
        });

        when('the user wants to change how many events are displayed', async () => {
            const button = AppComponent.queryByTestId('number-of-events-input');
            await userEvent.type(button, '{backspace}{backspace}10');
        });

        then('the user should be able to change how many events are displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole("listitem");
            expect(eventList.length).toEqual(10);
        });

    });

});