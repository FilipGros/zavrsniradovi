<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-type: application/json');
 header('Access-Control-Allow-Methods: GET');

  include '../connection.php';
  include '../classes.php';


  $stmt = $oConnection->prepare("SELECT * FROM studenti");

  $stmt->execute();
  $studenti=array();
    while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
    $student=new Student($row['studentID'],$row['ime'],$row['prezime']);
        array_push($studenti,$student);
    }   
  
    echo json_encode($studenti);

?>