<?php
date_default_timezone_set('America/Sao_Paulo');

$post = file_get_contents("php://input");
$contato = json_decode($post);

if(!empty($post)){
	$contato = get_object_vars($contato);
	$contato['operadora'] = get_object_vars($contato['operadora']);
	$array_contatos = unserialize($_COOKIE['api_contatos']);
	$contato['id'] = count($array_contatos)+1;
	$array_contatos[] = $contato;
	setcookie('api_contatos', serialize($array_contatos));
}

if(isset($_COOKIE['api_contatos'])){

	$array_contatos = unserialize($_COOKIE['api_contatos']);

	if(isset($_GET['id'])){
		$indice = $_GET['id']-1;
		$contato = isset($array_contatos[$indice]) ? $array_contatos[$indice] : 'Esse contato não existe';
		echo json_encode($contato);
	}else{		
	  echo json_encode($array_contatos);
	}
}
