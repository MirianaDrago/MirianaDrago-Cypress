const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    fixturesFolder: "cypress/fixtures",
    baseUrl: "https://www.unibet.co.uk/blog",
    watchForFileChanges: false, 
  },
});
