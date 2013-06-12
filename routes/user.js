/*
 * GET users listing.
 */

exports.list = function (req, res) {
    res.send("respond with a resource");
};
exports.create = function (req, res) {
    var userAttributes = req.param('client', null);
    console.log(userAttributes);
}
