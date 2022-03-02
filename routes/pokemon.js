const PokemonController = require('../controllers/pokemon')
const router = require('express').Router()

router.get('/', PokemonController.getPokemon)

module.exports = router
