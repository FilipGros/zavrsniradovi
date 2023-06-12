<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-type: application/json');
 header('Access-Control-Allow-Methods: POST');

  include 'connection.php';
  include 'classes.php';

  $credentials = json_decode(file_get_contents("php://input"));
  $username = $credentials->username;
  $password =  $credentials->password;

  $stmt = $oConnection->prepare("SELECT * FROM osoba WHERE  username = :username");
  $stmt->bindParam(':username', $username);
  $stmt->execute();
  $user=$stmt->fetch(PDO::FETCH_ASSOC);
  $heshpassword = password_hash($user["password"], PASSWORD_DEFAULT);
  if($user && password_verify($password,$heshpassword)){
    $response=[
      "success" => true,
      "username" => $username,
      "uloga"=>$user['idUloga']
    ];
    echo json_encode($response);
  }
  else{
    $response=[
      "success" => false,
      "username" => $username
    ];
    echo json_encode($response);
  }
  

?>