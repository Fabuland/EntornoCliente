<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

$id=$_POST["id"];

$conn = mysqli_connect( 'localhost', 'root', '', 'juegosrol');
$sql =  "SELECT `id`, `creador`, `genero`, `editorial` FROM `juegosrol` WHERE id=$id";
$juegosrol=array();
$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $juegosrol[]=$row;
}

echo json_encode($juegosrol);
?>