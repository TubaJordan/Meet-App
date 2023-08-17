Feature: Specify Number of Events

    Scenario: When user hasn't specified a number of events, 32 is the default number.
        Given the user has not specified a number of events in a city
        When the user selects a city to view events
        Then the default number will be 32

    Scenario: User can change the number of events they want to see.
        Given the user wants to view a specific number of events
        When the user wants to change how many events are displayed
        Then the user should be able to change how many events are displayed
