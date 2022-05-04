import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components'
import './App.css'
import Layout from 'antd/lib/layout/layout'
const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/crypotcurrencies" element={<Cryptocurrencies />} />
                <Route exact path="/exchanges" element={<Exchanges />} />
                <Route exact path="/news" element={<News />} />
                <Route exact path="/crypto/:coinId" element={ <CryptoDetails />} />
              </Routes>
            </div>
          </Layout>
        </div>
        <div className='footer'>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App