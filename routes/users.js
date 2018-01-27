var express = require('express');
var router = express.Router();

var User = require('../models/user');

//DISPLAY USERS
router.get('/', function(req, res) {
    User.find({}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users', {
                users:users
            });
        }
    });
});

//DISPLAY USERS 1-10
router.get('/1', function(req, res) {
    User.find({id:{$gt:0,$lt:11}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/1', {
                users:users
            });
        }
    });
});

//DISPLAY USERS 11-20
router.get('/2', function(req, res) {
    User.find({id:{$gt:10,$lt:21}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/2', {
                users:users
            });
        }
    });
});
//DISPLAY USERS 21-30
router.get('/3', function(req, res) {
    User.find({id:{$gt:20,$lt:31}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/3', {
                users:users
            });
        }
    });
});
router.get('/4', function(req, res) {
    User.find({id:{$gt:30,$lt:41}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/4', {
                users:users
            });
        }
    });
});
router.get('/5', function(req, res) {
    User.find({id:{$gt:40,$lt:51}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/5', {
                users:users
            });
        }
    });
});
router.get('/6', function(req, res) {
    User.find({id:{$gt:50,$lt:61}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/6', {
                users:users
            });
        }
    });
});
router.get('/7', function(req, res) {
    User.find({id:{$gt:60,$lt:71}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/7', {
                users:users
            });
        }
    });
});
router.get('/8', function(req, res) {
    User.find({id:{$gt:70,$lt:81}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/8', {
                users:users
            });
        }
    });
});
router.get('/9', function(req, res) {
    User.find({id:{$gt:80,$lt:91}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/9', {
                users:users
            });
        }
    });
});
router.get('/10', function(req, res) {
    User.find({id:{$gt:90,$lt:101}}, function(err,users) {
        if(err) {
            console.log(err);
        } 
        else {
            res.render('users.pages/10', {
                users:users
            });
        }
    });
});

module.exports = router;