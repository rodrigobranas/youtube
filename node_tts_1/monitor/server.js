const axios = require("axios");
const TotalVoice = require("totalvoice-node");
const client = new TotalVoice(process.env.TOTALVOICE_API_KEY);

const servers = [
	{
		name: "Servidor 1",
		url: "http://localhost:4001",
		developer: {
			name: "Rodrigo Branas",
			telephone: process.env.RODRIGOBRANAS_TELEPHONE
		}
	},
	{
		name: "Servidor 2",
		url: "http://localhost:4002",
		developer: {
			name: "Rodrigo Branas",
			telephone: process.env.RODRIGOBRANAS_TELEPHONE
		}
	}
];

(async function () {
	console.log("Iniciando monitoramento dos servidores");
	for (const server of servers) {
		await axios({
			url: server.url,
			method: "get"
		}).then((response) => {
			console.log(`${server.name} está no ar!`);
		}).catch(() => {
			console.log(`${server.name} está fora do ar!`);
			const message = `${server.developer.name} o ${server.name} está fora do ar, por favor faça alguma coisa o mais rápido possível!`;
			const options = {
				velocidade: 2,
				tipo_voz: "br-Vitoria"
			};
			client.tts.enviar(server.developer.telephone, message, options).then(() => {
				console.log(`O desenvolvedor ${server.developer.name} já foi avisado!`);
			});
		});
	}
	console.log("Finalizando monitoramento dos servidores");
})();
