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
    sum: String,
    service: [{ name: String, price: Number, date: Date }]

})

UserSchema.methods.getServiceCountByName = function(name){
    var count = 0;
    for (i=0;  i < this.service.length;  i++){
        if (this.service[i].name== name)
            count++;
    }

    return count;

}

UserSchema.methods.getServiceTotalByName = function(name){
    var total = 0;
    for (i=0;  i < this.service.length;  i++){
        if (this.service[i].name== name)
            total = total + this.service[i].price;
    }

    return total;

}

UserSchema.methods.getServicePriceTotal= function() {
    var total = 0;
    for (i=0;  i < this.service.length;  i++){
            total = total + this.service[i].price;
    }

    return total;

}

var User = mongoose.model('User', UserSchema)

exports.User = User;