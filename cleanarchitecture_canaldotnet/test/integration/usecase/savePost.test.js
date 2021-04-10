import Post from '../../../src/domain/post.js';
import SavePost from '../../../src/usecase/savePost.js';
import DeletePost from '../../../src/usecase/deletePost.js';
import * as postRepository from '../../../src/repository/postRepositoryDB.js';

test('Should save a new post usecase', async function () {
	const savePost = new SavePost(postRepository);
	const deletePost = new DeletePost(postRepository);
	const post = new Post('Introduction to Node.js', '...');
	const newPost = await savePost.execute(post);
	expect(newPost.id).toBeDefined();
	await deletePost.execute(newPost.id);
});
