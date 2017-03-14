const got = require('got')
const Promise = require('bluebird')

// This function grabs a random agent.
// To call: var a; ppl.getAgent().then(function(res){a = res})
function getAgent(){
    return new Promise(function(resolve, reject){
        got('http://pplapi.com/random.json')
        .then(function(response){
            return resolve(JSON.parse(response.body))
        })
    })
}

// This function accepts a valid two-letter country code, and then grabs an agent from that country.
// To call: var a; ppl.getAgentByCountry('ca').then(function(res){a = res})
function getAgentByCountry(code){
    return new Promise(function(resolve, reject){
        got(`http://pplapi.com/country/${code}/random.json`)
        .then(function(response){
            return resolve(JSON.parse(response.body))
        })
    })
}

// Export defined functions.
exports.getAgent = getAgent
exports.getAgentByCountry = getAgentByCountry