import './App.css';
import {Route,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  const [isLogggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col'>
     <Navbar isLogggedIn={isLogggedIn} setIsLoggedIn={setIsLoggedIn}/>

     <Routes>
      <Route path="/" element={<Home isLogggedIn={isLogggedIn}/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={
       <PrivateRoute isLogggedIn={isLogggedIn}>
          <Dashboard/>
       </PrivateRoute>
      }/>
     </Routes>

    </div>
  );
}

export default App;
