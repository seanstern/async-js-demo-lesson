## Functions

<dl>
<dt><a href="#getCarbonEmissionsSync">getCarbonEmissionsSync(portfolio)</a> ⇒ <code>number</code></dt>
<dd><p>Given a portfolio, synchronously requests the amount of carbon the portfolio
emitted in the past year in tons.</p>
</dd>
<dt><a href="#getEWasteSync">getEWasteSync(portfolio)</a> ⇒ <code>number</code></dt>
<dd><p>Given a portfolio, synchronously requests the amount of e-waste the portfolio
generated in the past year in tons.</p>
</dd>
<dt><a href="#getCleanEnergySync">getCleanEnergySync(portfolio)</a> ⇒ <code>number</code></dt>
<dd><p>Given a portfolio, synchronously requests the amount of clean energy the
portfolio used in terawatt-hours in the past year.</p>
</dd>
<dt><a href="#getCarbonEmissionsAsync">getCarbonEmissionsAsync(portfolio, cb)</a> ⇒ <code>void</code></dt>
<dd><p>Given a portfolio, asynchronously requests the amount of carbon the portfolio
emitted in the past year in tons and invokes the callback with that amount
upon success.</p>
</dd>
<dt><a href="#getEWasteAsync">getEWasteAsync(portfolio, cb)</a> ⇒ <code>void</code></dt>
<dd><p>Given a portfolio, asynchronously requests the amount of e-waste the
portfolio generated in the past year in tons and invokes the callback with
that amount upon success.</p>
</dd>
<dt><a href="#getCleanEnergyAsync">getCleanEnergyAsync(portfolio, cb)</a> ⇒ <code>void</code></dt>
<dd><p>Given a portfolio, asynchronously requests the amount of clean energy the
portfolio used in terawatt-hours in the past year and invokes the callback
with that amount upon success.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Portfolio">Portfolio</a> : <code>Object</code></dt>
<dd><p>A portfolio of stocks</p>
</dd>
<dt><a href="#GetImpactDatumAsyncCallback">GetImpactDatumAsyncCallback</a> : <code>function</code></dt>
<dd><p>Callback invoked by <code>get*Async</code> functions with err value upon error, impact
datum value upon success.</p>
</dd>
</dl>

<a name="getCarbonEmissionsSync"></a>

## getCarbonEmissionsSync(portfolio) ⇒ <code>number</code>

Given a portfolio, synchronously requests the amount of carbon the portfolio
emitted in the past year in tons.

**Kind**: global function  
**Returns**: <code>number</code> - the amount of carbon the portfolio emitted in the past year
in tons

| Param     | Type                                 | Description   |
| --------- | ------------------------------------ | ------------- |
| portfolio | [<code>Portfolio</code>](#Portfolio) | the portfolio |

<a name="getEWasteSync"></a>

## getEWasteSync(portfolio) ⇒ <code>number</code>

Given a portfolio, synchronously requests the amount of e-waste the portfolio
generated in the past year in tons.

**Kind**: global function  
**Returns**: <code>number</code> - the amount of e-waste the portfolio generated in the past
year in tons

| Param     | Type                                 | Description   |
| --------- | ------------------------------------ | ------------- |
| portfolio | [<code>Portfolio</code>](#Portfolio) | the portfolio |

<a name="getCleanEnergySync"></a>

## getCleanEnergySync(portfolio) ⇒ <code>number</code>

Given a portfolio, synchronously requests the amount of clean energy the
portfolio used in terawatt-hours in the past year.

**Kind**: global function  
**Returns**: <code>number</code> - the amount of clean energy the portfolio used in
terawatt-hours in the past year

| Param     | Type                                 | Description   |
| --------- | ------------------------------------ | ------------- |
| portfolio | [<code>Portfolio</code>](#Portfolio) | the portfolio |

<a name="getCarbonEmissionsAsync"></a>

## getCarbonEmissionsAsync(portfolio, cb) ⇒ <code>void</code>

Given a portfolio, asynchronously requests the amount of carbon the portfolio
emitted in the past year in tons and invokes the callback with that amount
upon success.

**Kind**: global function

| Param     | Type                                                                     | Description                                                                                                              |
| --------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| portfolio | [<code>Portfolio</code>](#Portfolio)                                     | the portfolio                                                                                                            |
| cb        | [<code>GetImpactDatumAsyncCallback</code>](#GetImpactDatumAsyncCallback) | callback invoked with err value upon error, amount of carbon the portfolio emitted in the past year in tons upon success |

<a name="getEWasteAsync"></a>

## getEWasteAsync(portfolio, cb) ⇒ <code>void</code>

Given a portfolio, asynchronously requests the amount of e-waste the
portfolio generated in the past year in tons and invokes the callback with
that amount upon success.

**Kind**: global function

| Param     | Type                                                                     | Description                                                                                                                 |
| --------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| portfolio | [<code>Portfolio</code>](#Portfolio)                                     | the portfolio                                                                                                               |
| cb        | [<code>GetImpactDatumAsyncCallback</code>](#GetImpactDatumAsyncCallback) | callback invoked with err value upon error, amount of e-waste the portfolio generated in the past year in tons upon success |

<a name="getCleanEnergyAsync"></a>

## getCleanEnergyAsync(portfolio, cb) ⇒ <code>void</code>

Given a portfolio, asynchronously requests the amount of clean energy the
portfolio used in terawatt-hours in the past year and invokes the callback
with that amount upon success.

**Kind**: global function

| Param     | Type                                                                     | Description                                                                                                                           |
| --------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| portfolio | [<code>Portfolio</code>](#Portfolio)                                     | the portfolio                                                                                                                         |
| cb        | [<code>GetImpactDatumAsyncCallback</code>](#GetImpactDatumAsyncCallback) | callback invoked with err value upon error, amount of clean energy the portfolio used in terawatt-hours in the past year upon success |

<a name="Portfolio"></a>

## Portfolio : <code>Object</code>

A portfolio of stocks

**Kind**: global typedef  
**Properties**

| Name        | Type                                                        | Description                           |
| ----------- | ----------------------------------------------------------- | ------------------------------------- |
| portfolioId | <code>string</code>                                         | the unique id of the portfolio        |
| holdings    | <code>Array.&lt;{ticker: string, shares: number}&gt;</code> | the stocks that make up the portfolio |

<a name="GetImpactDatumAsyncCallback"></a>

## GetImpactDatumAsyncCallback : <code>function</code>

Callback invoked by `get*Async` functions with err value upon error, impact
datum value upon success.

**Kind**: global typedef

| Param       | Type                                     | Description                               |
| ----------- | ---------------------------------------- | ----------------------------------------- |
| err         | <code>Error</code> \| <code>null</code>  | non-null Error upon error, null otherwise |
| impactDatum | <code>number</code> \| <code>null</code> | a number upon success, null otherwise     |
