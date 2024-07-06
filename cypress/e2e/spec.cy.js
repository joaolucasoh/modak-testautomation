import { homePageEl, secondPageEl } from '../support/pages/elements';
describe('As a Customer, we want to see if the second item from the second results page has at least 1 item to be bought', () => {
  it('search the Instax mini and get the second product from the second page', () => {
    // Fill the text on the search input field
    cy.fillField(homePageEl.inputSearch,'instax mini');  
    cy.get(homePageEl.submitSearch).click();

    // Check the url
    cy.url().should('include', '/wholesale-instax-mini');
    
    //scroll until the pagination bar
    cy.get(homePageEl.paginationList)
      .contains('a', '2')
      .scrollIntoView()
      .click();

    // check if is on the 2nd page
    cy.url().should('include', 'page=2');
    
    // Click on the second item - removing attr to avoid opening a new tab(we know that Cypress doesn't handle new tabs well)
    cy.get(secondPageEl.secondProduct).eq(1).invoke("removeAttr", "target").click()

    // Check whether the buttons exists
    cy.get(secondPageEl.buyItNowButton).should('exist')
    cy.get(secondPageEl.addToCartButton).should('exist')
  })
})