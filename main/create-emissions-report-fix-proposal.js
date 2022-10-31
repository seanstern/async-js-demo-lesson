const logger = require("./lib/logger");
const Request = require("./lib/Request");
const { findPortfolioAsync } = require("./lib/portfolio-db");
const { getCarbonEmissionsAsync } = require("./lib/impact-api");
const { createMetricsPDFAsync } = require("./lib/report-api");

/**
 * Given a request containing exactly one portfolio id, creates a report on the
 * carbon emissions for the portfolio. Sends response whose status is 201 and
 * whosebody is the URL of the report upon success. Sends response whose status
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

    findPortfolioAsync(portfolioId, (err, portfolio) => {
      if (err) {
        req.respond(500, err?.message);
        logger.warn("sent response", 500, err?.message);
      }
      getCarbonEmissionsAsync(portfolio, (err, carbonEmissions) => {
        if (err) {
          req.respond(500, err?.message);
          logger.warn("sent response", 500, err?.message);
        }
        createMetricsPDFAsync({ carbonEmissions }, (error, url) => {
          if (error) {
            req.respond(500, err?.message);
            logger.warn("sent response", 500, err?.message);
          }
          req.respond(201, url);
          logger.info("sent response", 201, url);
        });
      });
    });
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
