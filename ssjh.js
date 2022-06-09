const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 8903

express()
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('main'))
  .get('/main', (req, res) => { 
    //res.cookie('lvlRec', JSON.stringify(lvlRec));
    res.render('main');
  })
  .get('/about', (req, res) => res.render('about'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
