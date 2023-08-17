Feature: Show/Hide Events Details

    Scenario: Event details are hidden by default.
        Given the user has not yet selected an event
        When the user opens the app and performs no interaction
        Then the events details should be hidden by default

    Scenario: User can open an event to see event specific details.
        Given the user has chosen an event
        When the user clicks on the selected event
        Then the events details are opened and displayed

    Scenario: User can close an events details to return to original state.
        Given the user has opened an events details
        When the user clicks on the event
        Then the event will close and hide the events details