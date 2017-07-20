// Dependencies
const express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    methodOverride = require('method-override');

// Passport Dependencies
const passport = require('passport'),
    env = require('dotenv').load(),
    session = require('express-session'),
    flash = require('connect-flash');

// Instantiate express
const app = express();

// Middleware
// override with POST having ?_method=PUT or _method=DELETE
app.use(methodOverride('_method'))
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(flash());
app.use(bodyParser.json());
// Use handlebars as our templating engine
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        "raw-helper": function (options) {
            return options.fn();
        },
    }
}));
// Set our view engine to be Handlebars i.e. uses .hbs extension on files
app.set('view engine', '.hbs');

// For Passport
app.use(session({
    secret: 'menumanager',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Models
const db = require('./models');

// Controllers and Routes
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

//load passport strategies
require('./config/passport/passport.js')(passport, db.User);
//authRoute
var authRoute = require('./routes/auth.js')(app, passport);

// DB connection & syncs database
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`Nice! Database looks fine! App listening on PORT ${PORT}`);
    });
}).catch(function (err) {
    console.log(err);
});