import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import BookingHomePageObject from "../Pages/HotWireHomePageObject";

beforeEach(() => {
    cy.viewport(1600, 720);
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

Then("Set the check-in", ( checkIn ) => {
    BookingHomePageObject.setCheckIn( checkIn );
});

Then("Set the check-out", ( checkOut ) => {
    BookingHomePageObject.setCheckOut( checkOut );
});

Then("Find a Hotel", () => {
    BookingHomePageObject.findAHotel();
});

Then("Select the Flights tab", () => {
    BookingHomePageObject.selectFlightTab();
});


