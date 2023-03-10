const helmat = require('helmet')
const express = require('express');
const reactServ = require('./reactServ');

const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const app = express();

// secure server
app.use(helmat(
    {
    contentSecurityPolicy: process.env.NODE_ENV == 'development' ? false : true,
    }
))

// config server and Hot Refresh
reactServ(app)

app.use(sessions({
    secret : process.env.KEY_SESSION,
    saveUninitialized: true,
    cookie: {
        maxAge: parseInt(process.env.TIME_COKKIE),
        secure: process.env.NODE_ENV == 'development' ? false : true
    },
    resave : false
}))

// config environment
app.use(express.json())
app.use(cookieParser())
app.use(express.static('src/assets/style'))

module.exports = app