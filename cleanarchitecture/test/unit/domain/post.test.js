import Post from '../../../src/domain/post.js';

test('Should create a new post', function () {
	const post = new Post('10 things you need to know about JavaScript', '...', ['javascript']);
	expect(post.getTitle()).toBe('10 things you need to know about JavaScript');
});

test('Should throw error when creating a post without title', function () {
	expect(() => new Post('', '', '')).toThrow(Error);
	expect(() => new Post('', '', '')).toThrow('Invalid title');
});

test('Should throw error when creating a post without content', function () {
	expect(() => new Post('10 things you need to know about JavaScript', '', '')).toThrow(Error);
	expect(() => new Post('10 things you need to know about JavaScript', '', '')).toThrow('Invalid content');
});

test('Should throw error when creating a post with invalid tags', function () {
	expect(() => new Post('10 things you need to know about JavaScript', '...', '')).toThrow(Error);
	expect(() => new Post('10 things you need to know about JavaScript', '...', '')).toThrow('Invalid tags');
});
