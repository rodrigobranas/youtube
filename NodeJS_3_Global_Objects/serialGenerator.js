var config = require('./config');

exports.generate = function () {
	return Math.floor(Math.random() * config.max);
};