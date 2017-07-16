// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
var env = require('dotenv').load();
const exphbs = require('express-handlebars');

var passport = require('passport');
var session = require('express-session');

const app = express();

// Middleware
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// Use handlebars as our templating engine
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        "raw-helper": function (options) { return options.fn(); },
    }
}));
// Set our view engine to be Handlebars i.e. uses .hbs extension on files
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
const routes = require('./controllers/menuItemController.js');
const apiRoutes = require('./controllers/apiController.js');
app.use('/', routes);
app.use('/api', apiRoutes);

//load passport strategies
require('./config/passport/passport.js')(passport, db.User);
//authRoute
var authRoute = require('./routes/auth.js');
app.use('/', authRoute);

// DB connection & syncs database
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`Nice! Database looks fine! App listening on PORT ${PORT}`);
    });
}).catch(function (err) {
    console.log(err);
});