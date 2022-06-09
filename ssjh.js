const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 8903

express()
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.send('index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
