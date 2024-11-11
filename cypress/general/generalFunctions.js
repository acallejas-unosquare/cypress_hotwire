export function GoToSignIn() {
    cy.get('#globalnav-menubutton-link-bag').click()
    cy.contains('Sign in').click();
  }

  
  export function getIframeDocument() {
    return cy
    .get('#aid-auth-widget-iFrame')
    .its('0.contentDocument').should('exist')
  }

  export function getMonth( month ){
    let months = [
      '',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    if( parseInt(month) < 10){
      month = month.substring(1);  
    }
    return months[month];

  }

  export function getDifferenceMonth( cMonth = null, cYear = null, monthNumber, year ){
    const d = new Date();
    let currentMonth = null;

    if (cMonth === null){
      currentMonth = d.getMonth();
    } else {
      currentMonth = cMonth;
    }

    let currentYear = null;
    if (cYear === null) {
      currentMonth = d.getFullYear();
    } else {
      currentYear = year;
    }

    return monthNumber - currentMonth +  (12 * (year - currentYear));
  }