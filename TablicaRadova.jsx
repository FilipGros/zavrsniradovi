import React,{useEffect,useState} from "react";
import axios from 'axios';

function TablicaRadova(){
const[zavrsniRadovi,setZavrsniRadovi]=useState([]);
const[mentor,setMentor]=useState(1);

    useEffect(()=>{
        axios.post(
            `http://localhost/zavrsniradovi/phps/zavrsniradovi/zavrsniRadoviMentor.php`,
            JSON.stringify({"idMentora":mentor})
          ).then((response)=>{
            console.log(response);
            setZavrsniRadovi(response.data);  
          });
    },[]);
    

return(
    <div>
       
<table cellspacing="3" bgcolor="#000000">
	<tr bgcolor="#ffffff">
		<th>Zavrsni rad ID</th>
		<th>Naslov</th>
        <th>Opis</th>
        <th>Student</th>
        <th>Predmet</th>
        <th>Ocjena</th>
        <th>Datum prijave</th>
        <th>Datum urucenja</th>
        <th>Mentor</th>
        <th>Status</th>
        <th>Komentar</th>
        <th>Uredi</th>
        <th>Obrisi</th>
	</tr>
    {
        zavrsniRadovi.map(z=>{
            return <tr bgcolor="#ffffff" key={z.ZavrsniRadID}>
            <td>{z.ZavrsniRadID}</td>
            <td>{z.Naslov}</td>
            <td>{z.Opis}</td>
            <td>{z.Student}</td>
            <td>{z.Predmet}</td>
            <td>{z.Ocjena}</td>
            <td>{z.DatumPrijave}</td>
            <td>{z.DatumUrucenja}</td>
            <td>{z.MentorID}</td>
            <td>{z.StatusID}</td>
            <td>{z.Komentar}</td>
            <td><button>Uredi</button></td>
            <td><button>Obrisi</button></td>

        </tr>
       })
    }	
</table> 


    </div>
);
}
export default TablicaRadova;