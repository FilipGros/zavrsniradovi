<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-type: application/json');
 header('Access-Control-Allow-Methods: POST');

  include '../connection.php';
  include '../classes.php';

  $data = json_decode(file_get_contents("php://input"));

  $stmt = $oConnection->prepare('SELECT * FROM zavrsniradovi WHERE mentorID = :mentor');
  
  $stmt->bindParam(':mentor', $data->idMentora);
  $stmt->execute();
  $zavrsniradovi=array();
    while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
    $zavrsnirad=new ZavrsniRadovi($row['zavrsniRadID'],$row['naslov'],$row['opis'],$row['student'],$row['predmet'],$row['ocjena'], $row['datumPrijave'], $row['datumUrucenja'], $row['mentorID'], $row['statusID'], $row['komentar']);
        array_push($zavrsniradovi,$zavrsnirad);
    }   
  
    echo json_encode($zavrsniradovi);

?>