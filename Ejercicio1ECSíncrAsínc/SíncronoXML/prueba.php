<?php

header("Content-Type: text/xml");
header("Cache-Control: no-cache, must-revalidate");


$conn = mysqli_connect( "localhost", "root", "", "rol");
$sql = "SELECT titulo,genero,editorial,creador FROM rol";
$result = mysqli_query($conn, $sql);

echo "<?xml version="1.0" encoding="utf-8"?>
<muestreo>";
while($resultado = mysqli_fetch_array($result))
 {
    echo "<rol>";
    echo "<titulo>" . $resultado["titulo"] . "</titulo>";
    echo "<genero>" . $resultado["genero"] . "</genero>";
    echo "<editorial>" . $resultado["editorial"] . "</editorial>";
    echo "<creador>" . $resultado["creador"] . "</creador>";
    echo "</rol>";
 }
echo "</muestreo>";


