const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000

app.use(express.static('./client/build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./client/build/index.html'))
})

app.listen(PORT)