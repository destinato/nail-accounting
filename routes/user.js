var User = require('../models/user').User;

exports.list = function (req, res) {
    res.send("respond with a resource");
};
exports.create = function (req, res) {
    var userAttributes = req.param('client', null);
    mongoose.connect('mongodb://admin:adminnikita@ds029658.mongolab.com:29658/nail_accounting');
    var user = new User(userAttributes);
    user.save();
    res.redirect('/');
}
