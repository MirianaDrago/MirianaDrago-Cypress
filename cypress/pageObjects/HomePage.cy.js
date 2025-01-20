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

    clickSearchButton() {
        // get all .search-link elements
        cy.get('a.search-link')
          // filter to whichever is visible on this viewport
          .filter(':visible')
          .click();
      }      
      
}

export default new HomePage();
