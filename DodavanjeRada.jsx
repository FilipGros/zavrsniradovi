import React,{useState,useEffect} from "react";
import axios from 'axios';

function DodavanjeRadova(){

const[naslov,setNaslov]=useState('');
const[opis,setOpis]=useState('');
const[student,setStudent]=useState('');
const[predmet,setPredmet]=useState('');
const[mentor,setMentor]=useState('');
const[studenti,setStudenti]=useState([]);
const[predmeti,setPredmeti]=useState([]);
const[nastavnici,setNastavnici]=useState([]);

useEffect(()=>{
    axios.get(
        `http://localhost/zavrsniradovi/phps/studenti/read.php`,
      ).then((response)=>{
        setStudenti(response.data);  
        if(response.data.length>0) {
            setStudent(response.data[0].id);
        }
      });
      axios.get(
        `http://localhost/zavrsniradovi/phps/predmeti/readPredmeti.php`,
      ).then((response)=>{
        setPredmeti(response.data);
        if(response.data.length>0) {
            setPredmet(response.data[0].predmetid);
        }
      });
      axios.get(
        `http://localhost/zavrsniradovi/phps/osobe/readNastavnici.php`,
      ).then((response)=>{
        setNastavnici(response.data);
        if(response.data.length>0) {
            setMentor(response.data[0].OsobaID);
        }
      });
},[]);


const spremanjeZapisa=()=>{
   axios.post(
        `http://localhost/zavrsniradovi/phps/zavrsniradovi/dodavanjeRada.php`,
        JSON.stringify(
            {
                "naslov":naslov,
                "opis":opis,
                "student":student,
                "predmet":predmet,
                "mentor":mentor
            }
        )
      ).then((response)=>{
      alert(response.data.poruka);
      })

}


return(
    <div>
        <label>Naslov:</label>
        <input value={naslov} onChange={(e)=>setNaslov(e.target.value)}/>
        <br/>
        <label>Opis:</label>
        <input value={opis} onChange={(e)=>setOpis(e.target.value)}/>
        <br/>
        <label>Student:</label>
        <select value={student} onChange={(e)=>setStudent(e.target.value)}>
            {studenti.map(s=>{
                 return <option value={s.id} key={s.id}>{s.ime +" " +s.prezime}</option>
            })}
        </select>
        <br/>
        <label>Predmet:</label>
        <select value={predmet} onChange={(e)=>setPredmet(e.target.value)}>
            {predmeti.map(p=>{
                 return <option value={p.predmetid} key={p.predmetid}>{p.naziv}</option>
            })}
        </select>
        <br/>
        <label>Nastavnik:</label>
        <select value={mentor} onChange={(e)=>setMentor(e.target.value)}>
            {nastavnici.map(n=>{
                 return <option value={n.OsobaID} key={n.OsobaID}>{n.OsobaID+" "+n.Ime +" " +n.Prezime}</option>
            })}
        </select>
        <button onClick={()=>{spremanjeZapisa()}}>Spremi zapis</button>
    </div>
);
}
export default DodavanjeRadova;