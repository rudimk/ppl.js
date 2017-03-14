# ppl.js
A Node.js wrapper around pplapi | http://pplapi.com

## Usage

Until this doesn't make it to npm, please clone this locally, and include in your code:
```javascript
var ppl = require('./index.js')
```

1. To get one random agent:

```javascript
var agent
ppl.getAgent()
.then(function(result){
    agent = result
})
```

2. You can grab a random agent from a particular country:

```javascript
var agent
ppl.getAgentByCountry('fr')
.then(function(result){
    agent = result
})
```

3. You can get a list of random agents:

```javascript
var agents
var n = 20
ppl.getAgents(n)
.then(function(result){
    agents = result
})
```

4. ...and you can get a list of random agents from a particular country:

```javascript
var agents
ppl.getAgentsByCountry('ru', 25)
.then(function(result){
    agents = result
})
```

## Issues
1. Create an npm package.
2. Create an ES7 version using async functions instead or promises.
3. Refactor, use ES6 classes instead, with ES7 async functions as class methods.

PRs are eagerly solicited.

## License
[This](https://github.com/rudimk/ppl.js/blob/master/LICENSE).
