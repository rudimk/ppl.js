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

// This function accepts a batch size, and then grabs as many agents.
// To call: var a; ppl.getAgents(n).then(function(res){a = res})
function getAgents(batch){
    return new Promise(function(resolve, reject){
        got(`http://pplapi.com/batch/${batch}/sample.json`)
        .then(function(response){
            return resolve(JSON.parse(response.body))
        })
    })
}

//This function combines specifying a country as well as a batch.
// To call: var a; ppl.getAgentsByCountry(country, batch).then(function(res){a = res})
function getAgentsByCountry(code, batch){
    return new Promise(function(resolve, reject){
        got(`http://pplapi.com/batch/${batch}/country/${code}/sample.json`)
        .then(function(response){
            return resolve(JSON.parse(response.body))
        })
    })
}

// Export defined functions.
exports.getAgent = getAgent
exports.getAgentByCountry = getAgentByCountry
exports.getAgents = getAgents
exports.getAgentsByCountry = getAgentsByCountry