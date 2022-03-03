const PokemonController = require('../controllers/pokemon')
const router = require('express').Router()

router.get('/', PokemonController.listPokemons)
router.get('/:id', PokemonController.detailPokemon)
module.exports = router
