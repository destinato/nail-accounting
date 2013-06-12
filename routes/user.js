/*
 * GET users listing.
 */

exports.list = function (req, res) {
    res.send("respond with a resource");
};
exports.create = function (req, res) {
    var userAttributes = req.param('client', null);
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test');
    console.log(userAttributes);
}
