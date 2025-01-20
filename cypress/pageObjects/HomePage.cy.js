class HomePage {

    elements = {
        searchInputField : () => cy.get('input[type="search"]'),
        searchResultsCard : () => cy.get('section .card'),
        searchResultsCardTitle: () => cy.get('section .card .card-title')
    }

    searchForTerm(term) {
        this.elements.searchInputField()
          .type(term, { delay: 0 })
          .type('{enter}');
      }

    AcceptCookies() {
        cy.wait(3000) // waiting for banner to show
      
        cy.get('body').then(($body) => {
          const acceptButton = $body.find('#onetrust-accept-btn-handler')
          if (acceptButton.length > 0) {
            cy.log('Cookie banner found, clicking accept.')
            cy.wrap(acceptButton).click({ force: true })
          } else {
            cy.log('Cookie banner not found, skipping accept.')
          }
        })
      }

    clickSearchButton() {
        // get all .search-link elements
        cy.get('a.search-link')
          // filter to whichever is visible on this viewport
          .filter(':visible')
          .click();
      }      
      
}

export default new HomePage();
