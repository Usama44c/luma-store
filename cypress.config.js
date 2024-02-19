const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://magento.softwaretestingboard.com/',

    viewportHeight: 720,
    viewportWidth: 1020,

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',    
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',

    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
