export default class SavePost {
	constructor (postRepository) {
		this.postRepository = postRepository;
	}

	async execute () {
		const posts = await this.postRepository.getPosts();
		return posts;
	}
}
