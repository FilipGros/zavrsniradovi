<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-type: application/json');
 header('Access-Control-Allow-Methods: GET');

  include '../connection.php';
  include '../classes.php';


  $stmt = $oConnection->prepare("SELECT * FROM predmeti");

  $stmt->execute();
  $predmeti=array();
    while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
    $predmet=new Predmet($row['predmetID'],$row['naziv']);
        array_push($predmeti,$predmet);
    }   
  
    echo json_encode($predmeti);

?>