var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

// reviewsCreate
module.exports.reviewsCreate = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};

// reviewsReadOne
module.exports.reviewsReadOne = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};

// reviewsUpdateOne
module.exports.reviewsUpdateOne = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};

// reviewsDeleteOne
module.exports.reviewsDeleteOne = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};