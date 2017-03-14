# ppl.js
A Node.js wrapper around pplapi | http://pplapi.com

## Usage

Until this doesn't make it to npm, please clone this locally, and include in your code:
```javascript
var ppl = require('./index.js')
```

To get one random agent:

```javascript
var agent
ppl.getAgent()
.then(function(result){
    agent = result
})
```