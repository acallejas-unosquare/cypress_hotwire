import { When, Then, Given, DataTable} from "@badeball/cypress-cucumber-preprocessor";
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

Then("Look for the destination {string}", ( destination ) => {
    BookingHomePageObject.searchDestination( destination );
});

Then("Set check-in {string} and check-out {string}", ( checkIn, checkOut ) => {
    BookingHomePageObject.setDates( checkIn, checkOut );
});

Then("Find a Hotel", () => {
    BookingHomePageObject.findAHotel();
});

Then("Select the Flights tab", () => {
    BookingHomePageObject.selectFlightTab();
});


