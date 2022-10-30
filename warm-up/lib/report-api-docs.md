## Functions

<dl>
<dt><a href="#createMetricsPDFSync">createMetricsPDFSync(metrics)</a> ⇒ <code>string</code></dt>
<dd><p>Given metrics, synchronously creates a PDF report for those metrics and
returns the URL of the newly created PDF.</p>
</dd>
<dt><a href="#createMetricsPDFAsync">createMetricsPDFAsync(metrics, cb)</a> ⇒ <code>void</code></dt>
<dd><p>Given metrics, asynchronoussly creates a PDF report for those metrics and
invokes the callback with the URL of the newly created PDF on success.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ReportMetrics">ReportMetrics</a> : <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>An object map representing metrics to include in a report. The keys
in the object are the metric names. The values are the associate datum.</p>
</dd>
<dt><a href="#CreateMetricsPDFAsyncCallback">CreateMetricsPDFAsyncCallback</a> : <code>function</code></dt>
<dd><p>Callback invoked by {@linkcode createMetricsPDFAsync} with err value upon
error, URL of the newly created PDF upon success.</p>
</dd>
</dl>

<a name="createMetricsPDFSync"></a>

## createMetricsPDFSync(metrics) ⇒ <code>string</code>

Given metrics, synchronously creates a PDF report for those metrics and
returns the URL of the newly created PDF.

**Kind**: global function  
**Returns**: <code>string</code> - the URL of the PDF report

| Param   | Type                                         | Description                              |
| ------- | -------------------------------------------- | ---------------------------------------- |
| metrics | [<code>ReportMetrics</code>](#ReportMetrics) | the metrics to include in the PDF report |

<a name="createMetricsPDFAsync"></a>

## createMetricsPDFAsync(metrics, cb) ⇒ <code>void</code>

Given metrics, asynchronoussly creates a PDF report for those metrics and
invokes the callback with the URL of the newly created PDF on success.

**Kind**: global function

| Param   | Type                                                                         | Description                                                                           |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| metrics | [<code>ReportMetrics</code>](#ReportMetrics)                                 | the metrics to include in the PDF report                                              |
| cb      | [<code>CreateMetricsPDFAsyncCallback</code>](#CreateMetricsPDFAsyncCallback) | callback invoked with err value upon error, URL of the newly created PDF upon success |

<a name="ReportMetrics"></a>

## ReportMetrics : <code>Object.&lt;string, number&gt;</code>

An object map representing metrics to include in a report. The keys
in the object are the metric names. The values are the associate datum.

**Kind**: global typedef  
<a name="CreateMetricsPDFAsyncCallback"></a>

## CreateMetricsPDFAsyncCallback : <code>function</code>

Callback invoked by {@linkcode createMetricsPDFAsync} with err value upon
error, URL of the newly created PDF upon success.

**Kind**: global typedef

| Param | Type                                     | Description                                                 |
| ----- | ---------------------------------------- | ----------------------------------------------------------- |
| err   | <code>Error</code> \| <code>null</code>  | non-null Error upon error, null otherwise                   |
| url   | <code>string</code> \| <code>null</code> | a URL of the newly created PDF upon success, null otherwise |
