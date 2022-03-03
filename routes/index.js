const pokemonRoutes = require('./pokemon')
const bookmarkRoutes = require('./bookmark')
const router = require('express').Router()

router.use('/pokemons', pokemonRoutes)
router.use('/bookmarks', bookmarkRoutes)
module.exports = router
