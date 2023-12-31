import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';
import ForgotPass from './Component/ForgotPass';
import Medicine from './Component/Medicine';
import PasswordComform from './Component/PasswordComform';
import PageNotFound from './Component/PageNotFound';

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/ForgotPass' element={<ForgotPass />} />
          <Route path='/Medicine' element={<Medicine />} />
          <Route path='/PasswordComform' element={<PasswordComform />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
