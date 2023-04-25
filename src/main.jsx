import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './pages/Home/Home'
import Stand from './pages/Home/Stand'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Stand />
    <App />
  </React.StrictMode>,
)

