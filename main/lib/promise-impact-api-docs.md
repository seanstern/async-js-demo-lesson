## Functions

<dl>
<dt><a href="#getCarbonEmissionsPromise">getCarbonEmissionsPromise(portfolio)</a> ⇒ <code>Promise.&lt;number&gt;</code></dt>
<dd><p>Given a portfolio, returns a Promise that will be fulfilled with the amount
of carbon the portfolio emitted in the past year in tons.</p>
</dd>
<dt><a href="#getEWastePromise">getEWastePromise(portfolio)</a> ⇒ <code>Promise.&lt;number&gt;</code></dt>
<dd><p>Given a portfolio, returns a Promise that will be fulfilled with the amount
of e-waste the portfolio generated in the past year in tons.</p>
</dd>
<dt><a href="#getCleanEnergyPromise">getCleanEnergyPromise(portfolio)</a> ⇒ <code>Promise.&lt;number&gt;</code></dt>
<dd><p>Given a portfolio, returns a Promise that will be fulfilled with the amount
of clean energy the portfolio used in terawatt-hours in the past year.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Portfolio">Portfolio</a> : <code>Object</code></dt>
<dd><p>A portfolio of stocks</p>
</dd>
</dl>

<a name="getCarbonEmissionsPromise"></a>

## getCarbonEmissionsPromise(portfolio) ⇒ <code>Promise.&lt;number&gt;</code>

Given a portfolio, returns a Promise that will be fulfilled with the amount
of carbon the portfolio emitted in the past year in tons.

**Kind**: global function  
**Returns**: <code>Promise.&lt;number&gt;</code> - a Promise that will be fulfilled with the amount
of carbon the portfolio emitted in the past year in tons

| Param     | Type                                 | Description   |
| --------- | ------------------------------------ | ------------- |
| portfolio | [<code>Portfolio</code>](#Portfolio) | the portfolio |

<a name="getEWastePromise"></a>

## getEWastePromise(portfolio) ⇒ <code>Promise.&lt;number&gt;</code>

Given a portfolio, returns a Promise that will be fulfilled with the amount
of e-waste the portfolio generated in the past year in tons.

**Kind**: global function  
**Returns**: <code>Promise.&lt;number&gt;</code> - a Promise that will be fulfilled with the amount
of e-waste the portfolio generated in the past year in tons

| Param     | Type                                 | Description   |
| --------- | ------------------------------------ | ------------- |
| portfolio | [<code>Portfolio</code>](#Portfolio) | the portfolio |

<a name="getCleanEnergyPromise"></a>

## getCleanEnergyPromise(portfolio) ⇒ <code>Promise.&lt;number&gt;</code>

Given a portfolio, returns a Promise that will be fulfilled with the amount
of clean energy the portfolio used in terawatt-hours in the past year.

**Kind**: global function  
**Returns**: <code>Promise.&lt;number&gt;</code> - a Promise that will be fulfilled with the amount
of clean energy the portfolio used in terawatt-hours in the past year

| Param     | Type                                 | Description   |
| --------- | ------------------------------------ | ------------- |
| portfolio | [<code>Portfolio</code>](#Portfolio) | the portfolio |

<a name="Portfolio"></a>

## Portfolio : <code>Object</code>

A portfolio of stocks

**Kind**: global typedef  
**Properties**

| Name        | Type                                                        | Description                           |
| ----------- | ----------------------------------------------------------- | ------------------------------------- |
| portfolioId | <code>string</code>                                         | the unique id of the portfolio        |
| holdings    | <code>Array.&lt;{ticker: string, shares: number}&gt;</code> | the stocks that make up the portfolio |

Done in 0.67s.
