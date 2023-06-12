<?php

class Osoba {
  public $OsobaID;
  public $Ime;
  public $Prezime;
  public $Username;
  public $Password;
  
  public function __construct($OsobaID, $Ime, $Prezime, $Username, $Password) {
    $this->OsobaID = $OsobaID;
    $this->Ime = $Ime;
    $this->Prezime = $Prezime;
    $this->Username = $Username;
    $this->Password = $Password;
  }
  
}

class Referada extends Osoba {

  
  public function __construct($OsobaID, $Ime, $Prezime, $Username, $Password) {
    parent::__construct($OsobaID, $Ime, $Prezime, $Username, $Password);
  }
  
}

class Nastavnik extends Osoba {
  
  
}
class Student{
  public $id;
  public $ime;
  public $prezime;
  public function __construct($id, $ime, $prezime) {
    $this->id = $id;
    $this->ime = $ime;
    $this->prezime = $prezime;
  }
}
class Predmet{
  public $predmetid;
  public $naziv;
  public function __construct($predmetid, $naziv) {
    $this->predmetid = $predmetid;
    $this->naziv = $naziv;
  }
}

class ZavrsniRadovi {
  public $ZavrsniRadID;
  public $Naslov;
  public $Opis;
  public $Student;
  public $Predmet;
  public $Ocjena;
  public $DatumPrijave;
  public $DatumUrucenja;
  public $MentorID;
  public $StatusID;
  public $Komentar;
  
  public function __construct($ZavrsniRadID, $Naslov, $Opis, $Student, $Predmet, $Ocjena, $DatumPrijave, $DatumUrucenja, $MentorID, $StatusID,$Komentar) {
    $this->ZavrsniRadID = $ZavrsniRadID;
    $this->Naslov = $Naslov;
    $this->Opis = $Opis;
    $this->Student = $Student;
    $this->Predmet = $Predmet;
    $this->Ocjena = $Ocjena;
    $this->DatumPrijave = $DatumPrijave;
    $this->DatumUrucenja = $DatumUrucenja;
    $this->MentorID = $MentorID;
    $this->StatusID = $StatusID;
    $this->Komentar=$Komentar;
  }
  
}
