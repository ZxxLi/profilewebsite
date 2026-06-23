import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRoute} from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* This allows for webpages to be loaded based on / funcitonality */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </StrictMode>,
)
