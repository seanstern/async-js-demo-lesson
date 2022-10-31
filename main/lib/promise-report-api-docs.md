## Functions

<dl>
<dt><a href="#createMetricsPDFPromise">createMetricsPDFPromise(metrics)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Given metrics, creates a PDF report for those metrics and returns a Promise
that will be fulfilled with the the URL of the newly created PDF.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ReportMetrics">ReportMetrics</a> : <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>An object map representing metrics to include in a report. The keys
in the object are the metric names. The values are the associate datum.</p>
</dd>
</dl>

<a name="createMetricsPDFPromise"></a>

## createMetricsPDFPromise(metrics) ⇒ <code>Promise.&lt;string&gt;</code>

Given metrics, creates a PDF report for those metrics and returns a Promise
that will be fulfilled with the the URL of the newly created PDF.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - a Promise that will be fulfilled with the URL of
the newly created PDF

| Param   | Type                                         | Description                              |
| ------- | -------------------------------------------- | ---------------------------------------- |
| metrics | [<code>ReportMetrics</code>](#ReportMetrics) | the metrics to include in the PDF report |

<a name="ReportMetrics"></a>

## ReportMetrics : <code>Object.&lt;string, number&gt;</code>

An object map representing metrics to include in a report. The keys
in the object are the metric names. The values are the associate datum.

**Kind**: global typedef
