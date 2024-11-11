import { getMonth, getDifferenceMonth } from "../general/generalFunctions";

class BookingFlightPageObject{

    elements ={
        FromInput: () => cy.get('input[placeholder="Where are you leaving from?"]').eq(0),
        FromBtn: () => cy.get('button[aria-label="Leaving from"]'),
        GoingToInput: () => cy.get('input[placeholder="Where are you going to?"]').eq(1),
        GoingToBtn: () => cy.get('button[aria-label="Going to"]'),
    }

    searchOrigin( destination ) {
        cy.intercept('https://201-141-126-14_s-189-216-110-10_ts-1731335484-clienttons-s.akamaihd.net/eum/results.txt');
        cy.intercept('https://www.uciservice.com/ds/api/v1/toolkit/Homepage/30031/en_US/default');
        cy.intercept('https://www.hotwire.com/api/uisprime/track');
        this.elements.FromBtn().click();
        this.elements.FromInput().type(destination);
        cy.get('.container-fluid').click();
    }

    searchFlightDestination( destination ) {
        cy.intercept('https://201-141-126-14_s-189-216-110-10_ts-1731335484-clienttons-s.akamaihd.net/eum/results.txt');
        cy.intercept('https://www.uciservice.com/ds/api/v1/toolkit/Homepage/30031/en_US/default');
        cy.intercept('https://www.hotwire.com/api/uisprime/track');
        this.elements.GoingToBtn().click();
        this.elements.GoingToInput().type(destination);
        cy.get('.container-fluid').click();
    }

}

module.exports = new BookingFlightPageObject();