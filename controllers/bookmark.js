const { API_POKEMON_SERVICE, API_BOOKMARK_SERVICE } = require('../axios')

class BookmarkController {
  static async catch (req, res) {
    try {
      const { id } = req.params
      const response = await API_POKEMON_SERVICE.get(`pokemons/${id}`)
      const { data } = response.data

      const createResp = await API_BOOKMARK_SERVICE.post(
        `bookmarks/catch/${id}`,
        {
          name: data.name
        }
      )

      res.status(201).json(createResp.data)
    } catch (err) {
      const { data, status } = err.response
      if (status == 400) {
        res.status(status).json(data)
      } else {
        res.status(500).json({
          message: 'Internal Server Error',
          status: false
        })
      }
    }
  }

  static async release (req, res) {
    try {
      const { id } = req.params
      const response = await API_BOOKMARK_SERVICE.delete(
        `bookmarks/release/${id}`
      )

      res.status(200).json(response.data)
    } catch (err) {
      const { data, status } = err.response
      if (status == 400) {
        res.status(status).json(data)
      } else {
        res.status(500).json({
          message: 'Internal Server Error',
          status: false
        })
      }
    }
  }

  static async rename (req, res) {
    try {
      const { id } = req.params
      const response = await API_BOOKMARK_SERVICE.put(
        `bookmarks/rename/${id}`,
        null,
        {}
      )

      res.status(200).json(response.data)
    } catch (err) {
      res.status(500).json({
        status: false,
        message: 'Internal Server Error'
      })
    }
  }

  static async all (req, res) {
    try {
      const response = await API_BOOKMARK_SERVICE.get(`bookmarks`)

      const { data } = response.data

      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: false
      })
    }
  }
}

module.exports = BookmarkController
