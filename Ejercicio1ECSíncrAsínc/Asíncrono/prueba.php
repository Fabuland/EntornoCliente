<?php        
header("Content-Type: application/json");
header("Cache-Control: no-cache, must-revalidate");  
$titulo=$_POST["titulo"];
$genero=$_POST["genero"];
$editorial=$_POST["editorial"];

$conn = mysqli_connect("localhost", "root", "", "rol");
$sql =  "SELECT titulo,genero,editorial from rol where titulo="$titulo" and genero="$genero" and editorial="$editorial";
$result=mysqli_query($conn,$sql);
if(empty($result) or $result==null or isset($result)){
echo "Imposible encontrar resultado";
}else{
while($mostrar=mysqli_fetch_array($result)){
    $resultado[]=$mostrar;
}
echo json_encode($resultado);
}

?>