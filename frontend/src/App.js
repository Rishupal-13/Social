import react  from 'react';
import Navbar from './Components/Navebar';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';





function App() {
  
  return (
    <div className="App">
        <HomePage/>
      <Routes>
                
                <Route path="/LoginPage" element={<LoginPage  />}/>
                <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    
    </div>
   
  );
}

export default App;
