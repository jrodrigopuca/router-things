import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from "react";

import AboutPage from './views/AboutPage';
import HomePage from './views/HomePage';
import UsersPage from './views/UsersPage';
import UserPage from './views/UserPage';
import NotFoundPage from './views/NotFoundPage';
import Navbar from './components/Navbar';
import Dashboard, {Welcome} from './views/Dashboard';

export default function App() {
  return (
  <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/users' element={<UsersPage />}/>
      <Route path='/user/:userId' element={<UserPage />} />
      <Route path='/dashboard/*' element={<Dashboard />} >
        <Route path="welcome" element={<Welcome />} />
      </Route>

      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </BrowserRouter>
  )
}
