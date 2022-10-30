## Functions

<dl>
<dt><a href="#findPortfolioSync">findPortfolioSync(portfolioId)</a> ⇒ <code><a href="#Portfolio">Portfolio</a></code></dt>
<dd><p>Given a portfolio id, synchronously queries the database for the portfolio.</p>
</dd>
<dt><a href="#findPortfolioAsync">findPortfolioAsync(portfolioId, cb)</a> ⇒ <code>void</code></dt>
<dd><p>Given a portflio id and a callback, asynchronously queries the database
for the portfolio and invokes the callback with a portfolio object on
success.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Portfolio">Portfolio</a> : <code>Object</code></dt>
<dd><p>A portfolio of stocks</p>
</dd>
<dt><a href="#FindPortfolioAsyncCallback">FindPortfolioAsyncCallback</a> : <code>function</code></dt>
<dd><p>Callback invoked by {@linkcode findPortfolioAsync} with err value upon error,
portfolio value upon success.</p>
</dd>
</dl>

<a name="findPortfolioSync"></a>

## findPortfolioSync(portfolioId) ⇒ [<code>Portfolio</code>](#Portfolio)

Given a portfolio id, synchronously queries the database for the portfolio.

**Kind**: global function  
**Returns**: [<code>Portfolio</code>](#Portfolio) - the portfolio requested

| Param       | Type                | Description                      |
| ----------- | ------------------- | -------------------------------- |
| portfolioId | <code>string</code> | the id of the portfolio to query |

<a name="findPortfolioAsync"></a>

## findPortfolioAsync(portfolioId, cb) ⇒ <code>void</code>

Given a portflio id and a callback, asynchronously queries the database
for the portfolio and invokes the callback with a portfolio object on
success.

**Kind**: global function

| Param       | Type                                                                   | Description                                                                |
| ----------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| portfolioId | <code>string</code>                                                    | the id of the portfolio to query                                           |
| cb          | [<code>FindPortfolioAsyncCallback</code>](#FindPortfolioAsyncCallback) | callback invoked with Error value upon error, Portfolio value upon success |

<a name="Portfolio"></a>

## Portfolio : <code>Object</code>

A portfolio of stocks

**Kind**: global typedef  
**Properties**

| Name        | Type                                                        | Description                           |
| ----------- | ----------------------------------------------------------- | ------------------------------------- |
| portfolioId | <code>string</code>                                         | the unique id of the portfolio        |
| holdings    | <code>Array.&lt;{ticker: string, shares: number}&gt;</code> | the stocks that make up the portfolio |

<a name="FindPortfolioAsyncCallback"></a>

## FindPortfolioAsyncCallback : <code>function</code>

Callback invoked by {@linkcode findPortfolioAsync} with err value upon error,
portfolio value upon success.

**Kind**: global typedef

| Param     | Type                                                      | Description                               |
| --------- | --------------------------------------------------------- | ----------------------------------------- |
| err       | <code>Error</code> \| <code>null</code>                   | non-null Error upon error, null otherwise |
| portfolio | [<code>Portfolio</code>](#Portfolio) \| <code>null</code> | a Portfolio upon success, null otherwise  |
