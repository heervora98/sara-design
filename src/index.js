import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Login from "./login/index"
import BottomNav from './navBar/BottomNav';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
    <BottomNav />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>

  // </React.StrictMode>
);


reportWebVitals();
