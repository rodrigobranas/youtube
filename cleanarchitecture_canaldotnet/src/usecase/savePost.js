export default class SavePost {
	constructor (postRepository) {
		this.postRepository = postRepository;
	}

	async execute (post) {
		const existingPost = await this.postRepository.getPostByTitle(post.title);
		if (existingPost) throw new Error('Post already exists');
		return this.postRepository.savePost(post);
	}
}
