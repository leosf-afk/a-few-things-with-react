import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import Stand from './pages/Home/Stand'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Stand/>
    <Footer/>
  </React.StrictMode>,
)