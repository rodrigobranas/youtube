export default class SavePost {
	constructor (postRepository) {
		this.postRepository = postRepository;
	}

	async execute (id) {
		const existingPost = await this.postRepository.getPost(id);
		if (!existingPost) throw new Error('Post does not exist');
		return this.postRepository.deletePost(id);
	}
}
