import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GloableState from './Context/ContextApi.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <GloableState>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </GloableState>
)