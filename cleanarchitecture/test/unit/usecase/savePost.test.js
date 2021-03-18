import Post from '../../../src/domain/post.js';
import SavePost from '../../../src/usecase/savePost.js';
import * as postRepository from '../../../src/repository/postRepositoryMemory.js';

test('Should save a new post', async function () {
	const savePost = new SavePost(postRepository);
	const post = new Post('Introduction to Node.js', '...');
	const newPost = await savePost.execute(post);
	expect(newPost.id).toBeDefined();
});
