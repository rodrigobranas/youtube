import database from '../infra/database.js';

export function savePost(post) {
	return database.one('insert into blog.post (title, content) values ($1, $2) returning *', [post.title, post.content]);
}

export function getPostByTitle(title) {
	return database.oneOrNone('select * from blog.post where title = $1', [title]);
}

export function getPost(id) {
	return database.oneOrNone('select * from blog.post where id = $1', [id]);
}

export function getPosts() {
	return database.query('select * from blog.post', []);
}

export function deletePost(id) {
	return database.none('delete from blog.post where id = $1', [id]);
}
