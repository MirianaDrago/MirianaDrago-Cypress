import HomePage from "../../pageObjects/HomePage.cy";

const viewPorts = [
  { width: 1280, height: 800 },
  { width: 375, height: 667 }
]

viewPorts.forEach((viewport) => {
  describe(`Search feature - ${viewport.width}x${viewport.height}`, () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })
  
    beforeEach(function() {
      cy.viewport(viewport.width, viewport.height)
      cy.fixture('testData.json').then((data) => {
        this.testData = data
      })
      cy.visit('/')
      cy.acceptCookies()
    })

    const searchTerms = ['football', 'horse racing bets'];
  
    searchTerms.forEach((term) => {
      it(`Shows correct search results for: ${term}`, function() {
        HomePage.clickSearchButton()
        HomePage.elements.searchInputField().should('have.attr', 'placeholder', 'Search ...')
        HomePage.searchForTerm(term)
  
        const encodedTerm = term.replaceAll(' ', '+'); 
        cy.url().should('include', `/search/${encodedTerm}`);
  
        // make sure there's at least one "card" 
        HomePage.elements.searchResultsCard()
        .should('exist')
        .and('have.length.greaterThan', 0)

        // get the titles of each cards
        HomePage.elements.searchResultsCardTitle().then(($titles) => {
          // allow multi-word partial matches
          const searchWords = term.toLowerCase().split(' ')
          const matching = $titles.filter((i, el) => {
            const text = el.innerText.toLowerCase()
              // pass if ANY of the words are in the titles...
            return searchWords.some(word => text.includes(word))
          })

          expect(matching.length, `at least one title containing words from "${term}"`).to.be.greaterThan(0)
        })
      })  
    })

    it('Shows no results message for invalid input', function() {
      HomePage.clickSearchButton()
      HomePage.searchForTerm('invalid search input')
    
      // assert that the no results message is displayed and contains expected text
      cy.get('article[class*="no-results"]').within(() => {
        cy.get('h1').should('be.visible').and('contain.text', this.testData.noSearchResultsHeader)
        cy.get('p').should('be.visible').and('contain.text', this.testData.noSearchResultsText)
        cy.get('.search-form').should('have.attr', 'role', 'search').and('be.visible')
        cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Search')
      })
    })

    it('Nothing happens when search is given empty input', function() {
      HomePage.clickSearchButton()
      HomePage.elements.searchInputField().type('{enter}')

      HomePage.elements.searchInputField().should('be.visible')
      cy.url().should('equal', Cypress.config('baseUrl')) // url should stay the same
    })
  })
})