<?php
session_start();
include("conexao.php");

$nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
$usuario = mysqli_real_escape_string($conexao, trim($_POST['usuario']));
$datanasc = mysqli_real_escape_string($conexao, trim($_POST['datanasc']));
$cpf = mysqli_real_escape_string($conexao, trim($_POST['cpf']));
$cep = mysqli_real_escape_string($conexao, trim($_POST['cep']));
$endereco = mysqli_real_escape_string($conexao, trim($_POST['endereco']));
$ndr = mysqli_real_escape_string($conexao, trim($_POST['ndr']));
$senha = mysqli_real_escape_string($conexao, trim(md5($_POST['senha'])));

$sql = "select count(*) as total from usuario where usuario = '$usuario'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);

if($row['total'] == 1) {
	$_SESSION['usuario_existe'] = true;
	header('Location: cadastro.php');
	exit;
}

$sql = "INSERT INTO usuario (nome, usuario, datanasc, cpf , cep , endereco, ndr, senha, data_cadastro) VALUES ('$nome', '$usuario', '$datanasc', '$cpf', '$cep', '$endereco', '$ndr',  '$senha', NOW())";

if($conexao->query($sql) === TRUE) {
	$_SESSION['status_cadastro'] = true;
}

$conexao->close();

header('Location: cadastro.php');
exit;
?>