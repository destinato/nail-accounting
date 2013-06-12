/**
 * Created with JetBrains WebStorm.
 * User: Admin
 * Date: 12.06.13
 * Time: 17:29
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:adminnikita@ds029658.mongolab.com:29658/nail_accounting');
var UserSchema = mongoose.Schema({
    name: String,
    last_name: String,
    phone: String,
    sum: String
})

var User = mongoose.model('User', UserSchema)

exports.User = User;