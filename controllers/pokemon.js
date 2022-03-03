const { API_POKEMON_SERVICE } = require('../axios')

class PokemonController {
  static async listPokemons (req, res) {
    try {
      const response = await API_POKEMON_SERVICE.get(`pokemons`)
      const { data } = response.data

      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: false
      })
    }
  }

  static async detailPokemon (req, res) {
    try {
      const { name } = req.params
      const detailPokemon = await API_POKEMON_SERVICE.get(`pokemons/${name}`)
      const { data } = detailPokemon
      res.status(200).json(data)
    } catch (err) {
      const { data, status } = err.response
      if (status == 404) {
        res.status(status).json(data)
      } else {
        res.status(500).json({
          message: 'Internal Server Error',
          status: false
        })
      }
    }
  }
}

module.exports = PokemonController
