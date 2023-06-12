import React, { useState, useEffect } from 'react';
import axios from "axios"; 
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './header';

const Pocetna = () => {
  const [zavrsniRadovi, setZavrsniRadovi] = useState([]);
  useEffect(() =>{
    axios.get("http://localhost/radovi/read.php").then((res) => {setZavrsniRadovi(res.data)});
},[]);
const deleteUser = (id) => {
    axios.delete(`http://localhost/shop/delete.php?id=${id}`).then(function(response){
});
}
if(!zavrsniRadovi) return null;

  const handleEdit = (zavrsniRadId) => {
    // Handle edit functionality
    console.log('Uredi zavrsni rad:', zavrsniRadId);
  };

  const handleAdd = () => {
    // Handle add functionality
    console.log('Dodaj novi zavrsni rad');
  };

  const handleDelete = (zavrsniRadId) => {
    // Handle delete functionality
    console.log('Obrisi zavrsni rad', zavrsniRadId);
  };

  return (
    <>
     <Header></Header>
    <div>
    <h1>Zavrsni Radovi</h1>
    <div className="h-100 d-flex align-items-center justify-content-center">
      
      
        <table className="table">     
        <thead>
          <tr>
            <th>ZavrsniRadID</th>
            <th>Naslov</th>
            <th>Opis</th>
            <th>Student</th>
            <th>Predmet</th>
            <th>Ocjena</th>
            <th>Status</th>
            <th>DatumPrijave</th>
            <th>DatumUrucenja</th>
            <th>DatumPredaje</th>
            <th>NastavnikID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {zavrsniRadovi.map((zavrsniRad) => (
            <tr key={zavrsniRad.ZavrsniRadID}>
              <td>{zavrsniRad.ZavrsniRadID}</td>
              <td>{zavrsniRad.Naslov}</td>
              <td>{zavrsniRad.Opis}</td>
              <td>{zavrsniRad.Student}</td>
              <td>{zavrsniRad.Predmet}</td>
              <td>{zavrsniRad.Ocjena}</td>
              <td>{zavrsniRad.DatumPrijave}</td>
              <td>{zavrsniRad.DatumUrucenja}</td>
              <td>{zavrsniRad.DatumPredaje}</td>
              <td>{zavrsniRad.NastavnikID}</td>
              <td>{zavrsniRad.StatusID}</td>
              <td>
                <button onClick={() => handleEdit(zavrsniRad.ZavrsniRadID)}>Edit</button>
                <button onClick={() => handleDelete(zavrsniRad.ZavrsniRadID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table></div></div> </>
        );}
        export default Pocetna;