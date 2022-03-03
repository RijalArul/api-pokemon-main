const axios = require('axios')
const https = require('https')

const API_POKEMON_SERVICE = axios.create({
  baseURL: 'http://localhost:4001/',
  timeout: 30000, //optional
  httpsAgent: new https.Agent({ keepAlive: true })
})

const API_BOOKMARK_SERVICE = axios.create({
  baseURL: 'http://localhost:4002/',
  timeout: 30000, //optional
  httpsAgent: new https.Agent({ keepAlive: true })
})

module.exports = { API_POKEMON_SERVICE, API_BOOKMARK_SERVICE }
