import { getMonth, getDifferenceMonth } from "../general/generalFunctions";

class BookingHomePageObject{

    elements ={

        CarsMenu: () => cy.get("li > a.nav-link[href='https://www.hotwire.com/car-rentals/']"),
        FlightsMenu: () => cy.get("li > a.nav-link[href='https://www.hotwire.com/flights/']"),
        Vacations: () => cy.get("li > a.nav-link[href='https://www.hotwire.com/packages/']"),
        SearchBar: () => cy.get("input[data-bdd = 'farefinder-hotel-destination-input']"),
        FirstOption: () => cy.get("li.active > .active"),
        FindAHotelBtn: () => cy.get("button[type='submit']"),
        getCheckCalendar: () => cy.get("#input1-farefinder-hotel-date"),
        getCurrentMonth: () => cy.get('.month > h4 > span'),
        getNextMonthBtn: () => cy.get('button > span').contains('Next month')
    }   

    ValidateMainPage(){
        this.elements.FlightsMenu().should('be.visible');
        this.elements.CarsMenu().should('be.visible');
        this.elements.Vacations().should('be.visible');

        this.elements.SearchBar().type("Brooklyn, New York, United States of America");

        this.elements.FirstOption().should('be.visible');
        this.elements.FirstOption().click();
        this.elements.FindAHotelBtn().click();
    }

    ValidateTitle(){
        cy.title().should('include', 'Cheap Hotels, Cars, & Flights | Last Minute Travel Deals | Hotwire');
    }

    searchDestination( destination ) {
        this.elements.SearchBar().type(destination);
        cy.get('.container-fluid').click();
        //this.elements.SearchBar().type('{esc}');
    }

    setDates( checkIn, checkOut ) {
        let checkInDay = parseInt(checkIn.substring(3,5)) > 9 ? parseInt(checkIn.substring(3,5)) : parseInt(checkIn.substring(4,5));
        let checkInMonth = checkIn.substring(0,2);
        let checkInYear = checkIn.substring(6,10);
                
        this.elements.getCheckCalendar().should('be.visible');
        this.elements.getCheckCalendar().scrollIntoView();
        this.elements.getCheckCalendar().click({force: true});

        // CheckIn
        let n = getDifferenceMonth(checkInMonth, checkInYear);
        console.log('Diff checkin ' + n);
        for (let i = 0; i<n; i++){
            this.elements.getNextMonthBtn().click({force: true});
        }
        cy.get('.month-table > tbody').eq(0).find('tr > td').contains(checkInDay).click();
        
        // CheckOut
        /*
        let checkOutDay = parseInt(checkOut.substring(3,5)) > 9 ? parseInt(checkOut.substring(3,5)) : parseInt(checkOut.substring(4,5));
        let checkOutMonth = parseInt(checkOut.substring(0,2)) - 1;
        let checkOutYear = checkOut.substring(6,10);

        n = getDifferenceMonth(checkInMonth, checkInYear, checkOutMonth, checkOutYear);
        console.log('Diff checkout ' + n);
        for (let i = 0; i<n; i++){
            this.elements.getNextMonthBtn().click({force: true});
        }
        cy.get('.month-table > tbody').eq(1).find('tr > td').contains(checkOutDay).click({force: true});
        */
    }

    findAHotel () {
        this.elements.FindAHotelBtn().click({force: true});
    }

    selectFlightTab() {
        //this.elements.FlightsMenu().click({force: true});
        cy.intercept('https://www.hotwire.com/graphql')
        cy.intercept('https://www.hotels.com/trvl-px/v2/get',{});
        cy.intercept('https://www.hotwire.com/api/bucketing/v1/evaluateExperimentsAndLog');
        cy.visit('https://www.hotwire.com/flights/');
    }
}

module.exports = new BookingHomePageObject();