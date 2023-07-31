# Meet App

## Features, User Stories, and BDD Scenarios

### Feature 1: Filter Events By City

**User story**

As a user 
I should be able to filter events by city 
So that I can see the list of events that take place in that city.

**Scenarios**

*Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.*
- **Given** user hasn’t searched for any city; 
- **When** the user opens the app;
- **Then** the user should see a list of all upcoming events.

*Scenario 2: User should see a list of suggestions when they search for a city.*
- **Given** the main page is open;
- **When** user starts typing in the city textbox;
- **Then** the user should see a list of cities (suggestions) that match what they’ve typed.

*Scenario 3: User can select a city from the suggested list.*
- **Given** the user was typing “Phoenix” in the city textbox and the list of suggested cities is showing; 
- **When** the user selects a city (e.g., “Phoenix, Arizona”) from the list; 
- **Then** their city should be changed to that city (i.e., “Phoenix, Arizona”) And the list of suggestions should disappear, and the user should receive a list of upcoming events in that city.
 
### Feature 2: Show/Hide Events Details

**User Story**

As a user 
I should be able to show and hide events details 
So that I can get additional information about specific events.

**Scenarios**

*Scenario 1: Event details are hidden by default.*
- **Given** the user has not yet selected an event;
- **When** the user opens the app and performs no interaction;
- **Then** the events details should be hidden by default.

*Scenario 2: User can open an event to see event specific details.*
- **Given** the user has chosen an event;
- **When** the user clicks on the selected event;
- **Then** the events details are opened and displayed.

*Scenario 3: User can close an events details to return to original state.*
- **Given** the user has opened an events details; 
- **When** the user clicks on the event;
- **Then** the event will close and hide the events details.
 
### Feature 3: Specify Number of Events

**User Story**

As a user 
I should be able to specify the number of events to display 
So that I have control over how many events are displayed.

**Scenarios**

*Scenario 1: When user hasn’t specified a number of events, 12 is the default number.*
- **Given** the user has not specified a number of events in a city;
- **When** the user selects a city to view events;
- **Then** the default number will be 12.

*Scenario 2: User can change the number of events they want to see.*
- **Given** the user wants to view a specific number of events; 
- **When** the user wants to change how many events are displayed; 
- **Then** the user should be able to change how many events are displayed.
 
### Feature 4: Use the App When Offline

**User Story**

As a user 
I should be able to use the app when offline 
So that I can view event information when there is no internet connection.

**Scenarios**

*Scenario 1: Show stored data when there is no internet connection.*
- **Given** the user has no internet connection;
- **When** the user accesses the app;
- **Then** the stored data within the app should still be available.

*Scenario 2: Present a message that the app is in offline mode.*
- **Given** the user has no internet connection;
- **When** the user accesses the app;
- **Then** a message should appear informing them they are in offline mode.

*Scenario 3: Show and error message when user changes settings when there is no internet connection.*
- **Given** the user has changed the settings in the app in offline mode;
- **When** the user confirms changes on the settings screen;
- **Then** an error message should inform the user that the changes cannot be made in offline mode.
 
### Feature 5: Add an App Shortcut to the Home Screen

**User Story**

As a user 
I should be able to add an app shortcut to my home screen
So that I can access the app in the future.

**Scenarios**

*Scenario 1: User can install the meet app as a shortcut on their device home screen (user OS dependent).*
- **Given** the user has not added the app to their home screen; 
- **When** the user wants to add the app to their home screen;
- **Then** they should be able to add the app to their home screen.
 
### Feature 6: Display Charts Visualizing Event Details

**User Story**

As a user 
I should be able to view a chart displaying event details
So that I can have a visual representation of events and their details.

**Scenarios**

*Scenario 1: Show a chart with the number of upcoming events in each city.*
- **Given** the user has not selected a city;
- **When** the user wants to compare events between cities;
- **Then** they should be able to access a chart with the number of upcoming events in each city.