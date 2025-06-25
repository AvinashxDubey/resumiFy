import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'

// This is the entry point for your React application - the first file that runs.
// ReactDOM.createRoot(...): Creates the connection between HTML and React.
// BrowserRouter: Enables page navigation using URLs (e.g., /about, /contact).

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)