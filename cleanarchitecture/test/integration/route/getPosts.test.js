import axios from 'axios';

test('Should get posts through route', async function () {
	const response = await axios({
		url: 'http://localhost:3000/posts',
		method: 'GET'
	});
});
