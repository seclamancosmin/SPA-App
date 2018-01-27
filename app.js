//MODULES
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var hbs = require('express-handlebars');
var expValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jsonApp');
var db = mongoose.connection;

var register = require('./routes/register');
var users = require('./routes/users');
var routes = require('./routes/index');

//INIT APP
var app = express();

//VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

// //BODYPARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//EXPRESS SESION
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// //EXPRESS VALIDATOR
app.use(expValidator({
    errorFormatter: function(param, msg, value) {
            var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;
        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg : msg,
            value : value
        };
    }
}));

//CONNECT FLASH
app.use(flash());

//GLOBAL VARS
app.use(function (req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

app.use('/register', register);
app.use('/users', users);
app.use('/', routes);


//SET PORT
app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});

