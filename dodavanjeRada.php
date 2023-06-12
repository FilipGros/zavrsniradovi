<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-type: application/json');
 header('Access-Control-Allow-Methods: POST');

  include '../connection.php';
  include '../classes.php';

  $zavrsniRad = json_decode(file_get_contents("php://input"));
  $stmt = $oConnection->prepare('INSERT INTO zavrsniradovi (naslov,opis,student,predmet,datumPrijave,mentorID,statusID)
  VALUES( :naslov, :opis, :student, :predmet, :datumPrijave, :mentorID, :statusID)');
$datum=date('y-m-d');
$status=1;
$stmt->bindParam(':naslov',$zavrsniRad->naslov);
$stmt->bindParam(':opis',$zavrsniRad->opis);
$stmt->bindParam(':student',$zavrsniRad->student);
$stmt->bindParam(':predmet',$zavrsniRad->predmet);
$stmt->bindParam(':datumPrijave',$datum);
$stmt->bindParam(':mentorID',$zavrsniRad->mentor);
$stmt->bindParam(':statusID',$status);



 if($stmt->execute()){
    echo json_encode(array("poruka"=>"Završni rad uspješno spremljen."));
 }
 else{
    echo json_encode(array("poruka"=>"Došlo je do greške prilikom spremanja."));
 }


?>