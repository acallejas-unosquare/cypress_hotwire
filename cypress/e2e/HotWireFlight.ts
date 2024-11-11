import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import BookingHomePageObject from "../Pages/HotWireHomePageObject";
import BookingFlightPageObject from '../Pages/HotWireFlightPageObjects';

beforeEach(() => {
    cy.viewport(1600, 720);
    cy.intercept('https://201-141-126-14_s-189-216-110-10_ts-1731335484-clienttons-s.akamaihd.net/eum/results.txt');
    cy.intercept('https://www.uciservice.com/ds/api/v1/toolkit/Homepage/30031/en_US/default');
    cy.intercept('https://www.hotwire.com/api/uisprime/track');
});


Given("I navigate to Booking website", () => {
    cy.visit("https://www.hotwire.com");
});

When("I open the home page and validate the Booking page title", () => {
    BookingHomePageObject.ValidateTitle();
});

Then("Validate the Booking menu in home page", () => {
    BookingHomePageObject.ValidateMainPage();
});

Then("Look for the destination", ( destination ) => {
    BookingHomePageObject.searchDestination( destination );
});


Then("Find a Hotel", () => {
    BookingHomePageObject.findAHotel();
});

Then("Select the Flights tab", () => {
    BookingHomePageObject.selectFlightTab();
});

Then('set the origin {string} and destination {string}', (origin, destination) => {
    BookingFlightPageObject.searchOrigin( origin );
    BookingFlightPageObject.searchFlightDestination( destination );
});


