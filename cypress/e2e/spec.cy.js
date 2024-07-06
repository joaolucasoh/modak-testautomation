import { homePageEl, secondPageEl } from '../support/pages/elements';
describe('As a Customer, we want to see if the second item from the second results page has at least 1 item to be bought', () => {
  it('search the Instax mini and get the second product from the second page', () => {
    // Fill the text on the search input field
    cy.fillField(homePageEl.inputSearch,'instax mini');  
    cy.get(homePageEl.submitSearch).click();
  })
})