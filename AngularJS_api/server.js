var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

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


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  contatos.forEach(function (contato) {
  	if (contato.id == req.params.id) {
  		res.json(contato);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.listen(process.env.PORT || 3412);