const pokemonRoutes = require('./pokemon')
const router = require('express').Router()

router.use('/pokemons', pokemonRoutes)

module.exports = router
