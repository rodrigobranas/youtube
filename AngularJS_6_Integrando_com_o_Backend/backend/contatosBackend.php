<?php
date_default_timezone_set('America/Sao_Paulo');
$data = Date('d/m/Y h:i');

$operadoras[] = array('nome' => 'Oi', 'codigo' => 14, 'categoria' => 'Celular', 'preco' => 2);
$operadoras[] = array('nome' => 'Vivo', 'codigo' => 15, 'categoria' => 'Celular', 'preco' => 1);
$operadoras[] = array('nome' => 'Tim', 'codigo' => 41, 'categoria' => 'Celular', 'preco' => 3);

$contatos[] = array('nome' => 'Paulo', 'telefone' => '9999-8888', 'data' => $data, 
					'operadora' => $operadoras[0]);
$contatos[] = array('nome' => 'Ana', 'telefone' => '7777-8888', 'data' => $data, 
					'operadora' => $operadoras[1]);
$contatos[] = array('nome' => 'Maria', 'telefone' => '4444-8888', 'data' => $data, 
					'operadora' => $operadoras[2]);

$post = file_get_contents("php://input");
$contato = json_decode($post);
if(!empty($post)){
	$contato = get_object_vars($contato);
	$contato['operadora'] = get_object_vars($contato['operadora']);
	$array_contatos = unserialize($_COOKIE['api_contatos']);
	$array_contatos[] = $contato;
	setcookie('api_contatos', serialize($array_contatos));
} else if(isset($_COOKIE['api_contatos'])){
	$array_contatos = unserialize($_COOKIE['api_contatos']);
	foreach($array_contatos as $contato){
		$contato['data'] = $data;
		$cookie[] = $contato;
	}
	setcookie('api_contatos', serialize($cookie));
	$contatos = array_merge($contatos, $cookie);
}

echo json_encode($contatos);