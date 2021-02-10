const crypto = require('crypto');
const axios = require('axios');
const postsService = require('../service/postsService');

const generate = function () {
	return crypto.randomBytes(20).toString('hex');
};

const request = function (url, method, data) {
	return axios({ url, method, data });
};

test('Should get posts', async function () {
	const post1 = await postsService.savePost({ title: generate(), content: generate() });
	const post2 = await postsService.savePost({ title: generate(), content: generate() });
	const post3 = await postsService.savePost({ title: generate(), content: generate() });
	const response = await request('http://localhost:3000/posts', 'get');
	const posts = response.data;
	expect(posts).toHaveLength(3);
	await postsService.deletePost(post1.id);
	await postsService.deletePost(post2.id);
	await postsService.deletePost(post3.id);
});

test('Should save a post', async function () {
	const data = { title: generate(), content: generate() };
	const response = await request('http://localhost:3000/posts', 'post', data);
	const post = response.data;
	expect(post.title).toBe(data.title);
	expect(post.content).toBe(data.content);
	await postsService.deletePost(post.id);
});

test('Should update a post', async function () {
	const post = await postsService.savePost({ title: generate(), content: generate() });
	post.title = generate();
	post.content = generate();
	await request(`http://localhost:3000/posts/${post.id}`, 'put', post);
	const updatedPost = await postsService.getPost(post.id);
	expect(updatedPost.title).toBe(post.title);
	expect(updatedPost.content).toBe(post.content);
	await postsService.deletePost(post.id);
});

test('Should delete a post', async function () {
	const post = await postsService.savePost({ title: generate(), content: generate() });
	await request(`http://localhost:3000/posts/${post.id}`, 'delete');
	const posts = await postsService.getPosts();
	expect(posts).toHaveLength(0);
});