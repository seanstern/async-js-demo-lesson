<a name="Request"></a>

## Request

Class representing a request with one or more portfolio ids

**Kind**: global class

- [Request](#Request)
  - [new Request(...ids)](#new_Request_new)
  - [.portfolioIds](#Request+portfolioIds) ⇒ <code>Array.&lt;string&gt;</code>
  - [.respond(status, body)](#Request+respond) ⇒ <code>void</code>

<a name="new_Request_new"></a>

### new Request(...ids)

Creates a request

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| ...ids | <code>string</code> | portfolio id(s) of the request |

<a name="Request+portfolioIds"></a>

### request.portfolioIds ⇒ <code>Array.&lt;string&gt;</code>

Get the portfolio id(s) from the request. Note the portfolio id(s) returned
from this have been appropriately sanitized and can be safely used to
query the database.

**Kind**: instance property of [<code>Request</code>](#Request)  
**Returns**: <code>Array.&lt;string&gt;</code> - the portfolio id(s) requested.  
<a name="Request+respond"></a>

### request.respond(status, body) ⇒ <code>void</code>

Sends a JSON in response to a request.

**Kind**: instance method of [<code>Request</code>](#Request)

| Param  | Type                                        | Description               |
| ------ | ------------------------------------------- | ------------------------- |
| status | <code>number</code>                         | http status code          |
| body   | <code>JSON</code> \| <code>undefined</code> | the body of the responses |
