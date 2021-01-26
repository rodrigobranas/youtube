const database = require('../infra/database');

exports.getPosts = function () {
	return database.query('select * from blog.post');
};
