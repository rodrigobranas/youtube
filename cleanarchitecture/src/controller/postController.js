import Post from '../domain/post.js';
import SavePost from '../usecase/savePost.js';
import GetPosts from '../usecase/getPosts.js';
import * as postRepository from '../repository/postRepositoryDB.js';
const savePostUsecase = new SavePost(postRepository);
const getPostsUsecase = new GetPosts(postRepository);

export async function savePost (params, body) {
	const postForm = body;
	const post = new Post(postForm.title, postForm.content);
	const newPost = await savePostUsecase.execute(post);
	return newPost;
}

export async function getPosts () {
	const posts = await getPostsUsecase.execute();
	return posts;
}
