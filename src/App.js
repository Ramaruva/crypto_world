import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components'
import './App.css'
import Layout from 'antd/lib/layout/layout'
import { Space, Typography } from 'antd'
import { Provider } from 'react-redux'
import store from './app/store'
const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
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
          <div className='footer' >
              <Typography.Title level={5}  style={{color:'white'}}>
                Crptoverse <br></br>
                All Rights Reservered
              </Typography.Title>
              <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
              </Space>
        </div>
        </div>
      </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App