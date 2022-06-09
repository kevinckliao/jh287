const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 8903

const lvlRec = {
  lvlNum:40,
  lvlNext : [ 
    20, 1, 2, 3, 4,   5, 6, 7, 8, 9,
    10,11,12,13,14,  15,16,17,18,19,
    20,21,22,23,24,  25,26,27,28,29,
    30,31,32,33,34,  35,36,37,38,39,
  ],
  lvlTime : [
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0
  ],
  lvlPass : [
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0
  ],
  lvlFail : [
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0
  ]
  /*
  lvlNum:70,
  lvlNext : [ 
    2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,
    2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,
    2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,
    2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,
    2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1
  ],
  lvlTime : [
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0
  ],
  lvlPass : [
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0
  ],
  lvlFail : [
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 
    0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0
  ]
  */
};

express()
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(cookieParser('k-secret-key'))
  //.get('/', (req, res) => res.render('login'))
  .get('/', (req, res) => res.render('main'))
  .get('/main', (req, res) => { 
    //res.cookie('lvlRec', JSON.stringify(lvlRec));
    res.render('main');
  })
  .get('/about', (req, res) => res.render('about'))
  .get('/L1', (req, res) => res.render('L1'))
  .get('/L2', (req, res) => res.render('L2'))
  .get('/L3', (req, res) => res.render('L3'))
  .get('/L4', (req, res) => res.render('L4'))
  .get('/L5', (req, res) => res.render('L5'))
  .get('/L6', (req, res) => res.render('L6'))
  .get('/L7', (req, res) => res.render('L7'))
  .get('/L8', (req, res) => res.render('L8'))
  .get('/L9', (req, res) => res.render('L9'))
  .get('/L10', (req, res) => res.render('L10'))
  .get('/L11', (req, res) => res.render('L11'))
  .get('/L12', (req, res) => res.render('L12'))
  .get('/L13', (req, res) => res.render('L13'))
  .get('/L14', (req, res) => res.render('L14'))
  .get('/L15', (req, res) => res.render('L15'))
  .get('/L16', (req, res) => res.render('L16'))
  .get('/L17', (req, res) => res.render('L17'))
  .get('/L18', (req, res) => res.render('L18'))
  .get('/L19', (req, res) => res.render('L19'))
  .get('/L20', (req, res) => res.render('L20'))
  .get('/L21', (req, res) => res.render('L21'))
  .get('/L22', (req, res) => res.render('L22'))
  .get('/L23', (req, res) => res.render('L23'))
  .get('/L24', (req, res) => res.render('L24'))
  .get('/L25', (req, res) => res.render('L25'))
  .get('/L26', (req, res) => res.render('L26'))
  .get('/L27', (req, res) => res.render('L27'))
  .get('/L28', (req, res) => res.render('L28'))
  .get('/L29', (req, res) => res.render('L29'))
  .get('/L30', (req, res) => res.render('L30'))

  .post('/api/lvlcfg', (req,res) => {
      console.log(req.body.lvlCfgReq);
      res.json(JSON.stringify(lvlRec));
  })
  //login form
  .get('/login-error', (req, res) => res.render('login-error')) 
  .get('/login', (req, res) => res.render('login'))
  //process login
  .post('/login', (req,res) => {
    //console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    console.log("CLIENT Login:", username, password);

    if( username == "d" && password == ".") {
      console.log("CLIENT Login OK");
      //res.cookie('pNo',pNo /*{signed:true}*/);
      //res.cookie('pNo',pNo,{signed:true});
      //res.cookie('pDoneGame', '0');
      return res.redirect(302, '/main');
      }
      else {      
        return res.redirect(302, '/login-error');
        //res.json({msg:"error"});
        //req.flash('BAD', 'Login Again', '/');
      }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
