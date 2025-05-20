import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap App with BrowserRouter is now handled inside App, so no need to wrap here */}
    <App />
  </StrictMode>,
)
