export default class Post {
	constructor (title, content, tags = []) {
		if (!title) throw new Error('Invalid title');
		if (!content) throw new Error('Invalid content');
		if (!(tags instanceof Array)) throw new Error('Invalid tags');
		this.title = title;
		this.content = content;
		this.tags = tags;
	}

	getTitle() {
		return this.title;
	}

	getContent() {
		return this.content;
	}

	getTags() {
		return this.tags;
	}
}
