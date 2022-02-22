import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Navbar} from './components'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
           <div className='navbar'>
               <Navbar />
           </div>
           <div className='main'>

           </div>
           <div className='footer'>

           </div>
      </div>
      </BrowserRouter>
  )
}

export default App