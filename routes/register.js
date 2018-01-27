var express = require('express');
var router = express.Router();

var User = require('../models/user');

//REGISTER GET
router.get('/', function(req, res) {
    res.render('register'); //view
});

//REGISTER POST
router.post('/', function(req, res) {
    var id = req.body.id;
    var first_name = req.body.first_name;
    
    var last_name = req.body.last_name;
    var email = req.body.email;
    var country = req.body.country;
    var modified = req.body.modified;
    var vip = req.body.vip;

    //VALIDATION
    req.checkBody('id', 'id is required').notEmpty();
    req.checkBody('first_name', 'first_name is required').notEmpty();
    req.checkBody('last_name', 'last_name is required').notEmpty();
    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('email', 'email is required').isEmail();
    req.checkBody('country', 'country is required').notEmpty();
    req.checkBody('modified', 'modified is required').notEmpty();
    req.checkBody('vip', 'vip is required').notEmpty();

    var errors = req.validationErrors();
    if(errors) {
        res.render('register', {
            errors:errors
        });
    } else {
        var newUser = new User({
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            country: country,
            modified: modified,
            vip: vip
        }); 

        User.createUser(newUser, function(err,User){
            if(err) throw err;
            console.log(User);
        });
        req.flash('success_msg', 'Yor have been registered');
        res.redirect('register');
    }
});

module.exports = router;