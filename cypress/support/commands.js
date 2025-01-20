
Cypress.Commands.add('acceptCookies', () => {
    cy.wait(3000)
    cy.get('body').then(($body) => {
      const acceptButton = $body.find('#onetrust-accept-btn-handler')
      if (acceptButton.length > 0) {
        cy.log('Cookie banner found, clicking accept.')
        cy.wrap(acceptButton).click({ force: true })
      } else {
        cy.log('Cookie banner not found, skipping accept.')
      }
    })
  })
  