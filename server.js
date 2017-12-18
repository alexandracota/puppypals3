'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

app.listen(3333);
console.log('Listening on localhost:3333');