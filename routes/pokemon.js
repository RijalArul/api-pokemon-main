const PokemonController = require('../controllers/pokemon')
const router = require('express').Router()

router.get('/', PokemonController.listPokemons)
router.get('/:name', PokemonController.detailPokemon)
module.exports = router
