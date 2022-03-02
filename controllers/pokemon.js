class PokemonController {
  static async getPokemon (req, res) {
    try {
      console.log('Halo ini Get Pokemon')
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = PokemonController
