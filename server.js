// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const exphbs = require('express-handlebars');

// Middleware
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Models
const db = require('./models');

// Controllers and Routes
const routes = require('./controllers/menuItem_controller.js');
app.use('/', routes);

// DB connection
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on PORT ${PORT}`);
    });
}).catch(function(err) {
    console.log(err);
});
