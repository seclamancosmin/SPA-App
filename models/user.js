var mongoose = require('mongoose');

//USER SCHEMA
var UserSchema = mongoose.Schema({
    id: {
        type: Number
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    country: {
        type: String
    },
    modified: {
        type: String
    },
    vip: {
        type: Boolean
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
    newUser.save(callback);
};