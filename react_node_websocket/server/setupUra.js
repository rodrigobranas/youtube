const axios = require('axios');

const init = async function () {
	try {
	const ura = (await axios({
		url: 'https://api.totalvoice.com.br/ura',
		method: 'post',
		headers: {
			'Access-Token': process.env.TOTALVOICE_API_KEY
		},
		data: {
			nome: `URA ${Math.floor(Math.random() * 10000)}`,
			dados: [
				{
					acao: 'tts',
					coletar_dtmf: "6",
					timeout: "20",
					acao_dados: {
						mensagem: 'Olá, seja bem vindo ao canal Rodrigo Branas! Digite o código de 6 dígitos que está aparecendo na sua tela!'
					}
				},
				{
					acao: "dinamico",
					acao_dados: {
						url: 'https://82a10379757e20ead7a895b75ac84aec.m.pipedream.net'
					}
				}
			]
		}
	})).data;
	console.log(ura);
} catch (e) {
	console.log(e)
}
};

init();