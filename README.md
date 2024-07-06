# Modak - Web test automation

This repo contains tests automated using Cypress.

## Pre-requirements

Before starts, ensure you have the following software:

- [Node.js](https://nodejs.org/en/) (version 12 or later)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/)

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/joaolucasoh/modak-testautomation.git
   cd your-repo-folder
   ```

## Dependencies installation
* Run some of them:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```
## Running the tests
Interactive mode tests

To execute the tests in interactive mode, you can see the tests running in real-time:
```bash
npm run cypress:open
```
It will open the tests, run and close the Cypress interface.
```bash
npm run cypress:headed
```
## Notes about the test approach

I followed the instructions, went to the second page, and clicked on the second product. However, this product does not show the number of available items, as it does on some other products. 

For example, for some products on the product details screen, where there is an Add to Cart button, there is a text with the number of items (such as "982 items available").
My initial idea was to take this element, store the text in a variable, extract only the numbers using a regexp, and make an assertion >= 1.
However, currently, the second item on the list is a product in which you can only add one unity per person, which does not give me certainty about how many there are. 

Therefore, I decided to validate the minimum quantity by checking whether the two buttons, "add to cart" and "Buy now," are being displayed because when the product is out of stock, they are not available.
