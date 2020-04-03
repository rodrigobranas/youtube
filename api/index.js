const axios = require('axios');

(async function () {
	const sms = await axios({
		url: 'https://api2.totalvoice.com.br/sms',
		method: 'post',
		headers: {
			'Access-Token': process.env.TOTALVOICE_API_KEY
		},
		data: {
			'numero_destino': process.env.RODRIGOBRANAS_TELEPHONE,
			'mensagem': 'Inscreva-se no canal Rodrigo Branas e fique por dentro de todas as novidades do mundo da programação!' 
		}
	});
	console.log(sms.data);
})();