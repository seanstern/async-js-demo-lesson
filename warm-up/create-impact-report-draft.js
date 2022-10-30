const logger = require("./lib/logger");
const Request = require("./lib/Request");
const { findPortfolioSync } = require("./lib/portfolio-db");
const { getCarbonEmissionsSync } = require("./lib/impact-api");
const { createMetricsPDFSync } = require("./lib/report-api");

/**
 * Given a request containing a portfolio id, creates a report on the carbon
 * emissions for the portfolio. Sends response whose status is 201 and whose
 * body is the URL of the report upon success. Sends response whose status
 * is 500 and whose body is the error message upon failure.
 *
 * @param {Request} req a request containing a portfolio id
 * @return {void}
 */
const requestHandler = (req) => {
  try {
    logger.info("received request", req.portfolioIds);

    if (req.portfolioIds.length !== 1) {
      throw new Error("request should only contain 1 portfolioId");
    }
    const [portfolioId] = req.portfolioIds;

    const portfolio = findPortfolioSync(portfolioId);
    const carbonEmissions = getCarbonEmissionsSync(portfolio);
    const url = createMetricsPDFSync({ carbonEmissions });

    req.respond(201, url);

    logger.info("sent response", 201, url);

    return;
  } catch (err) {
    req.respond(500, err?.message);

    logger.warn("sent response", 500, err?.message);

    return;
  }
};

module.exports = {
  requestHandler,
};
