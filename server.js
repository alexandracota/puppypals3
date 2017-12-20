'use strict';

const express = require('express');
const jwt = require('express-jwt');
const mongoose = require('mongoose');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const PORT = process.env.API_PORT || 3001;

//db config
mongoose.connect('mongodb://heroku_tj3gfjnk:el4af3ucjhqd5db9e2al1rhjmm@ds161016.mlab.com:61016/heroku_tj3gfjnk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

//To prevent errors from Cross Origin Resource Sharing, 
//Set headers to allow CORS with middleware
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Acccess-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //remove cacheing to get the most recent information.
  res.setHeader('Cache-Control', 'no-cache');
  next();
})

router.get('/', function(req, res) {
  res.json({ message: 'API initialized!'});
});

app.use('/api', router);

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://alexcota.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://puppypals3.herokuapp.com/',
    issuer: 'alexcota.auth0.com',
    algorithms: ['RS256']
});

app.get('/api/dogs', (req, res) => {
  let dogs = [
  {
    id: 1,
    breed: 'chocolate dachshund'
  },
  {
    id: 2,
    breed: 'black dachshund'
  },
  {
    id: 3,
    breed: 'long-haired dachshund'
  },
  {
    id: 4,
    breed: 'miniature dachshund'
  }
  ]
  res.json(dogs);
})

app.listen(PORT, function () {
  console.log(`Listening on localhost: ${PORT}`);
});
