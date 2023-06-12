import React, { useState } from 'react';
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  /*const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  */


  const handleSubmit = async(event) => {
    event.preventDefault();

    axios.post(
        `http://localhost/zavrsniradovi/phps/login.php`,
       JSON.stringify({"username":username,"password":password})
      ).then((response)=>{
       if (response.data.success) {
          localStorage.setItem('username', response.data.username);
          setIsLoggedIn(true);
          navigate('/pocetna'); 
        } else {
          alert('Invalid credentials');
        }
      })


  };


  return (

    <div>
      <h1>Veleučilište u Virovitici</h1>
      <h1>Završni radovi</h1>
  
        <div>
          <label>Username:</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>
          <button onClick={(e)=>handleSubmit(e)}>Login</button>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
      
    </div>
  );
};

export default Login;