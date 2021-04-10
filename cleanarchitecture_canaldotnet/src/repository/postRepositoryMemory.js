const posts = [];

export async function savePost(post) {
	post.id = Math.floor(Math.random() * 1000);
	posts.push(post);
	return post;
}

export async function getPosts() {
	return posts;
}

export async function getPost(id) {
	return posts.find(post => post.id === id);
}

export async function getPostByTitle(title) {
	return posts.find(post => post.title === title);
}

export async function deletePost(id) {
	posts.splice(posts.find(post => post.id === id), 1);
}
