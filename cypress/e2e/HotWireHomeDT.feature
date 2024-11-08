# cypress/e2e/HotWireHomeDT.feature

Feature: Booking Home Page with DataTable

Scenario: I want to verify Booking Home Page
Given I navigate to Booking website
Then Look for the destination '<destination>'
Then Set check-in '<check_in>' and check-out '<check_out>'
Examples:
    | destination | check_in | check_out |
    | Boston (and vicinity), Massachusetts, United States of America | 01/06/2025 | 05/08/2025 |
    
