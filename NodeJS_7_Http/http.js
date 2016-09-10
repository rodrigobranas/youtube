var http = require('http');

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

var contatos = [
  {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: operadoras[0]},
  {id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: operadoras[1]},
  {id: 3, nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: operadoras[2]}
];

var router = {
	GET: {},
	get: function (path, fn) {
		this.GET[path] = fn;
	},
	POST: {},
	post: function (path, fn) {
		this.POST[path] = fn;
	}
};

router.get('/operadoras', function (req, res) {
	res.write(JSON.stringify(operadoras));
	res.end();
});

router.get('/contatos', function (req, res) {
	res.write(JSON.stringify(contatos));
	res.end();
});

router.post('/contatos', function (req, res) {
	var contato = JSON.parse(req.body);
	contatos.push(contato);
	res.end();
});

var parseBody = function (req, cb) {
	var body = [];
	req.on('data', function(chunk) {
	  body.push(chunk);
	});
	req.on('end', function() {
	  req.body = Buffer.concat(body).toString();
	  cb();
	});
};

http.createServer(function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	if (req.method === 'OPTIONS') return res.end();
	parseBody(req, function () {
	 router[req.method][req.url](req, res);
	});
}).listen(3412);