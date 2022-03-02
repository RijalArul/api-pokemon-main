const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000
const indexRoutes = require('./routes')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', indexRoutes)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
