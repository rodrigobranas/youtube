const postsData = require('../data/postsData');

exports.getPosts = function () {
	return postsData.getPosts();
};
