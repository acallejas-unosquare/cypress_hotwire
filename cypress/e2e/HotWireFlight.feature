# cypress/e2e/HotWireFlight.feature

Feature: Booking Flight Page with DataTable

Scenario: I want to verify Booking Flight Page
Given I navigate to Booking website
When I open the home page and validate the Booking page title
Then Select the Flights tab
Then set the origin '<origin>' and destination '<destination>'
Examples:
    | origin | destination
    | Boston (and vicinity), Massachusetts, United States of America | Mexico City (MEX - Mexico City Intl.) |