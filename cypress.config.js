const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', 
    overwrite: false,
    html: true,
    json: true,
    charts: true, 
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    fixturesFolder: "cypress/fixtures",
    baseUrl: "https://www.unibet.co.uk/blog",
    watchForFileChanges: false, 
  },
});
