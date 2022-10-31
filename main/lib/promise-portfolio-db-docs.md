## Functions

<dl>
<dt><a href="#findPortfolioPromise">findPortfolioPromise(portfolioId)</a> ⇒ <code><a href="#Portfolio">Promise.&lt;Portfolio&gt;</a></code></dt>
<dd><p>Given a portflio id, returns a Promise that will be fulfilled with a
Portfolio object from the database.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Portfolio">Portfolio</a> : <code>Object</code></dt>
<dd><p>A portfolio of stocks</p>
</dd>
</dl>

<a name="findPortfolioPromise"></a>

## findPortfolioPromise(portfolioId) ⇒ [<code>Promise.&lt;Portfolio&gt;</code>](#Portfolio)

Given a portflio id, returns a Promise that will be fulfilled with a
Portfolio object from the database.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;Portfolio&gt;</code>](#Portfolio) - a Promise that will be fulfilled with a
Portfolio

| Param       | Type                | Description                      |
| ----------- | ------------------- | -------------------------------- |
| portfolioId | <code>string</code> | the id of the portfolio to query |

<a name="Portfolio"></a>

## Portfolio : <code>Object</code>

A portfolio of stocks

**Kind**: global typedef  
**Properties**

| Name        | Type                                                        | Description                           |
| ----------- | ----------------------------------------------------------- | ------------------------------------- |
| portfolioId | <code>string</code>                                         | the unique id of the portfolio        |
| holdings    | <code>Array.&lt;{ticker: string, shares: number}&gt;</code> | the stocks that make up the portfolio |
