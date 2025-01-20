## Prerequisites

Before you begin, ensure you have met the following requirements:

 - Node.js and npm

Cypress is a Node.js application, and using it to run tests requires Node.js and npm (Node Package Manager). Ensure you have Node.js and npm installed — npm is included with the Node.js installation.

- **Installing Node.js and npm**: Visit the [Node.js website](https://nodejs.org/) to download and install the latest stable version of Node.js. This project requires Node.js version 14 or higher.

To check if you have Node.js and npm installed, run the following commands in your terminal:

```
node -v  # Checks the installed version of Node.js
npm -v   # Checks the installed version of npm
```

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Cloning the Repository

Start by cloning the repository to your local machine:

```
git clone https://github.com/MirianaDrago/MirianaDrago-Cypress.git
cd MirianaDrago-Cypress
```

### Install dependencies

```
npm install
```

### Run Cypress in Chrome browser with mochawesome reporter

```
npx cypress run --browser chrome --reporter mochawesome
```

## Project Design Considerations

1. Folder structure

   - The project is organized using the Page Object Model (POM) to separate test logic from UI elements.
   - They are stored in 'cypress/pageObjects' to centralize locators and reusable actions.
   - Tests are stored in cypress/e2e, grouped by feature for clarity under their respective page object.

2. Custom commands

   - Frequently reused logic, like accepting cookies, is implemented as a custom Cypress command in cypress/support/commands.js. This reduces redundancy.
  
3. Responsive testing

   - The tests are designed to run on both desktop and mobile viewports to verify responsiveness.

4. Reporting

   - The project uses the Mochawesome reporter to generate HTML reports for better visibility of test results. This can be improved with screenshots as well as videos in reports.
   - The test reports are generated in the `cypress/reports` folder. Open the `index.html` file to view the results.

  
### Test Cases Automated

The following three test cases were selected as the most important for the search functionality:

1. **Valid search terms**

Tests that valid search terms return valid results, verify URL structure, and confirm that at least one result contains words from the search item.

2. **Invalid search terms**

Tests that invalid search terms display an appropriate "no results" message.

3. **Empty Search Input**

Tests that submitting an empty search does not break the page and ensures that the search input remains visible, and the URL stays unchanged.

### What Could Be Automated With More Time

1. **UI Appearance**: Verify the appearance of search-related elements, such as button icons, colors, and layout, ensuring consistency across browsers and devices. This can also be achieved using visual testing tools like Percy or Applitools.
2. **Result Sorting**: Test if search results are correctly sorted based on criteria like date, relevance, or popularity.
3. **Post no-results workflow**: Test if the search functionality of the form shown on the "no results" page works as expected, similar to the initial search input field. 
4. **Edge Case Inputs**: Extend input testing to cover:
   - Partial matches
   - Case sensitivity
   - Misspelled queries
   - Long search terms
   - SQL injection or security tests (optional consideration)
5. **Pagination**: Validate the functionality of pagination, ensuring that navigating between pages correctly loads the expected results without errors.
6. **Cross-Browser and Device Testing**: Expand tests to additional browsers beyond Chrome (e.g., Firefox, Edge) and devices (e.g., tablets, various resolutions).

### Performance Testing (Optional Consideration)

While Cypress is not a performance testing tool, performance testing can be automated using tools like **k6**, **JMeter**, or **Gatling**. With these tools, it is possible to:
- Simulate high traffic scenarios to measure system behavior.
- Test response times for the search feature under varying loads.
- Identify bottlenecks or performance degradation.
