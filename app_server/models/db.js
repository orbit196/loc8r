var mongoose = require('mongoose');
var gracefulShutdown;

// Connection 1: Local database - working
// var dbURI = 'mongodb://localhost/Loc8r';

// Connection 2: Remote hosted database - ?
if (process.env.NODE_ENV == 'production') {
	dbURI = 'mongodb://orbit196:Upfront107@ds137763.mlab.com:37763/heroku_bwwxgnwq'
}

// Connection information
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

// For nodemon restarts
process.once('SIGUSR2', function () {
	gracefulShutdown('nodemon restart', function () {
		process.kill(process.pid, 'SIGUSR2');
	});
});
// For app termination
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function () {
		process.exit(0);
	});
});
// For Heroku app termination
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function () {
		process.exit(0);
	});
});

require('./locations');