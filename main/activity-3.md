# Activity 3

## Goal
Implement the following REST endpoint that meets the specification given the
libraries and starter code.

## Specification
Given a request containing exactly two portfolio ids, create a PDF report
representing the **difference** in carbon emissions between the two
portfolios (i.e. the former portfolio's carbon emissions subtracted from the
latter's). The metric in the report should be named `"emissionsDifference"`.
The endpoint sends a response whose status is 201 and body is the URL of
the report upon success; it sends a response whose status is 500 and
body is an error message upon failure.

Be sure to log at `info` level when a request is received and a successful
response is sent. Similarly log at the `warn` level when an error response is
sent.

## Libraries
- [`promise-portfolio-db` Documentation](./lib/promise-portfolio-db-docs.md)
- [`promise-impact-api` Documentation](./lib/promise-impact-api-docs.md)
- [`promise-report-api` Documentation](./lib/promise-report-api-docs.md)

## Starter Code
    const logger = require("./lib/logger");
    const Request = require("./lib/Request");
    const { findPortfolioPromise } = require("./lib/promise-portfolio-db");
    const { getCarbonEmissionsPromise } = require("./lib/promise-impact-api");
    const { createMetricsPDFPromise } = require("./lib/promise-report-api");
    
    /**
     * Given a request containing exactly two portfolio ids, create a PDF report
     * representing the **difference** in carbon emissions between the two
     * portfolios (i.e. the former portfolio's carbon emissions subtracted from the
     * latter's). The metric in the report should be named `"emissionsDifference"`.
     * The endpoint sends a response whose status is 201 and body is the URL of
     * the report upon success; it sends a response whose status is 500 and
     * body is an error message upon failure.
     *
     * @param {Request} req a request containing two portfolio ids
     * @return {void}
     */
    const requestHandler = (req) => {
      
    };
    
    module.exports = {
      requestHandler,
    };
    
