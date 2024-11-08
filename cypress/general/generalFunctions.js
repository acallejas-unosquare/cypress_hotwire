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
    let currentMonth = (cMonth === null) ? d.getMonth() + 1 : parseFloat(cMonth);
    let currentYear = (cYear === null) ? d.getDate() : parseInt(cYear);

    console.log("mes de inicio  -> " + currentMonth);
    console.log("año de inicio -> " + currentYear);
    console.log('La diferencia en funcion ' + parseInt(monthNumber) - parseInt(currentMonth) +  (12 * (parseInt(year) - parseInt(currentYear))))
    return parseInt(monthNumber) - parseInt(currentMonth) +  (12 * (parseInt(year) - parseInt(currentYear)));
  }