
/*
 * GET home page.
 */
var User = require('../models/user').User;

exports.index = function(req, res){
    User.find({}).find(function(err, users){
        res.render('index',{users: users});
    });
};
