const got = require('got')
const Promise = require('bluebird')

// This function grabs a random agent.
function getAgent(){
    return new Promise(function(resolve, reject){
        got('http://pplapi.com/random.json')
        .then(function(response){
            return resolve(JSON.parse(response.body))
        })
    })
}

// Export defined functions.
exports.getAgent = getAgent