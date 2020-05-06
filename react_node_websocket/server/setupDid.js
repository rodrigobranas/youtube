const axios = require('axios');

const init = async function () {
	const did = (await axios({
		url: 'https://api.totalvoice.com.br/did/35016301',
		method: 'put',
		headers: {
			'Access-Token': process.env.TOTALVOICE_API_KEY
		},
		data: {
			ura_id: 28143,
			ramal_id: null
		}
	})).data;
	console.log(did);
};

init();