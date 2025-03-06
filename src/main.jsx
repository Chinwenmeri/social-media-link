import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// this is that app function from the app.jsx file.
// how much editting can I do here in this file? 
// TODO: Find out this tonight.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
