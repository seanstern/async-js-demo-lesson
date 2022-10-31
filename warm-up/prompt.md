# Warm-up

## Goal
Below is a hypothetical code review scenario. Take a few minutes to read through the scenario on your own. Then privately identify **one or two** of the **most important** pieces of feedback you might provide in your review. After that, we'll have a quick group discussion where folks can share out their feedback.

## Scenario
Bloomeberg is creating a tool to analyze the environmental impact of a stock portfolio (a collection of stocks).

Your colleague has been asked to implement a javascript REST endpoint (a function run on a server) for the tool. The colleague was given a specification for the endpoint as follows:

> The endpoint accepts exactly one portfolio identifier as input and should respond as follows:
>   - upon successs, a message with
>     - an HTTP status code of 201
>     - a body containing the URL of a carbon emissions report
>   - upon failure, a message with
>     - an HTTP status code of 500
>     - a body containing an error message

Your colleague had the following well-tested, secure, third-party libraries to work with
  - [`Request` Documentation](./lib/Request-docs.md)
  - [`portfolio-db` Documentation](./lib/portfolio-db-docs.md)
  - [`impact-api` Documentation](./lib/impact-api-docs.md)
  - [`report-api` Documentation](./lib/report-api-docs.md)
  - [`logger` Documentation](./lib/logger-docs.md)

Your colleague submitted [this draft](./create-emissions-report-draft.js) and is looking for **one or two** pieces of the **most important** constructive criticism you can provide.