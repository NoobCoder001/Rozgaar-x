require('dotenv').config();
const expressJwt = require('express-jwt');


const auth = expressJwt ({
  secret: process.env.JWT_SECRET_KEY,
  algorithms: ["HS256"],
});

module.exports = auth;