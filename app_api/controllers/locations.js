var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

// locationsListByDistance
module.exports.locationsListByDistance = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};

// locationsCreate
module.exports.locationsCreate = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};

// locationsReadOne
module.exports.locationsReadOne = function (req, res) {
	Loc 
		.findById(req.params.locationid)
		.exec(function(err, location) {
			sendJsonResponse(res, 200, location);
		});
};

// locationsUpdateOne
module.exports.locationsUpdateOne = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};

// locationsDeleteOne
module.exports.locationsDeleteOne = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};
