import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
   <BrowserRouter>
      <App />
   </BrowserRouter>
  // </StrictMode>,
)
