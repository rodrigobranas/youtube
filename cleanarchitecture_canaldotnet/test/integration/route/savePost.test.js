import axios from 'axios';

test('Should save a new post through route', async function () {
	const response = await axios({
		url: 'http://localhost:3000/posts',
		method: 'POST',
		data: {
			title: `Introduction to Node.js ${Math.floor(Math.random() * 1000)}`,
			content: '...'
		}
	});
});
