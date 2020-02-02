<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$id = $_POST["id"];
$creador = $_POST["creador"];
$genero = $_POST["genero"];
$editorial = $_POST["editorial"];

$servidor = "localhost";
$usuario = "root";
$password = "";
$bbdd = "juegosrol";

$conn = new PDO("mysql:host=$servidor;dbname=$bbdd", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("INSERT INTO juegosrol (id, creador, genero, editorial) VALUES ('$id', '$creador', '$genero', '$editorial')");
$stmt->execute();

?>