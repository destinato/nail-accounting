var User = require('../models/user').User;

exports.list = function (req, res) {
    res.send("respond with a resource");
};
exports.create = function (req, res) {
    var userAttributes = req.param('client', null);
    var user = new User(userAttributes);
    user.save();
    res.redirect('/');
}

exports.addService = function (req, res)   {
    var serviceAttributes = req.param('service', null);
    var userId = req.param('userId', null);
    User.findOne({_id:userId}, function (err, user) {
        user.service.push(serviceAttributes);
        user.save();
        res.redirect('/');
    });
}




