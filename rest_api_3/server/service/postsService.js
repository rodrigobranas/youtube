const postsData = require('../data/postsData');

exports.getPosts = function () {
	return postsData.getPosts();
};

exports.getPost = function (id) {
	return postsData.getPost(id);
};

exports.savePost = function (post) {
	return postsData.savePost(post);
};

exports.deletePost = function (id) {
	return postsData.deletePost(id);
};

exports.updatePost = function (id, post) {
	return postsData.updatePost(id, post);
};
