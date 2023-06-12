import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './assets/login';
import Pocetna from './assets/pocetna';
import DodavanjeRada from './assets/zavrsniradovi/DodavanjeRada'
import ZavrsniRadovi from './assets/zavrsniradovi/ZavrsniRadovi'
import TablicaRadova from './assets/zavrsniradovi/TablicaRadova'
function LoggedIn()
{
  return <Navigate to="/pocetna" replace />;
}
function SignOut({ handleLogout }) {
  useEffect(() => {
    handleLogout(); // Call the handleSignOut function when the component mounts
  }, []);

  return <Navigate to="/" replace />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
      setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    
  };


 return (
     <BrowserRouter>
     <Routes>

       {isLoggedIn ? (
         <>
           <Route path="/pocetna" element={<ZavrsniRadovi />} />
           
         </>
       ) : (
         <>
           <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
           <Route
             path="/"
             element={
              isLoggedIn ? (
                 <Navigate to="/pocetna" />
               ) : (
                 <Login setIsLoggedIn ={setIsLoggedIn} handleLogin={handleLogin} />
               )
             }
           />
         </>
       )}
       <Route path="/signout" element={<SignOut handleLogout={handleLogout} />} />
       <Route path="*" element={<Navigate to="/" />} />
     </Routes>
   </BrowserRouter>
    );

  
}

export default App
