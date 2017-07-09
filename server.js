// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
var env = require('dotenv').load();

var passport = require('passport')
var session = require('express-session')


const app = express();
const exphbs = require('express-handlebars');

// Middleware
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Models
const db = require('./models');

// Controllers and Routes
const routes = require('./controllers/menuItem_controller.js');
app.use('/', routes);

// DB connection
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`App listening on PORT ${PORT}`);
    });
}).catch(function (err) {
    console.log(err);
});