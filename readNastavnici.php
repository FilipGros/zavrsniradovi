<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-type: application/json');
 header('Access-Control-Allow-Methods: GET');

  include '../connection.php';
  include '../classes.php';


  $stmt = $oConnection->prepare("SELECT * FROM osoba WHERE idUloga=1");

  $stmt->execute();
  $nastavnici=array();
    while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
    $nastavnik=new Nastavnik($row['osobaID'],$row['ime'],$row['prezime'], null, null);
        array_push($nastavnici,$nastavnik);
    }   
  
    echo json_encode($nastavnici);

?>