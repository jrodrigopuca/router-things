import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from "react";
import AboutPage from './views/AboutPage';
import HomePage from './views/HomePage';
import UsersPage from './views/UsersPage';
import NotFoundPage from './views/NotFoundPage';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/users' element={<UsersPage />}/>
      
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
  )
}
