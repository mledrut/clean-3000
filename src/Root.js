import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Liste from './components/Liste'
import New from './components/New'

const Root = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/liste" element={<Liste />} />
            <Route path="/new" element={<New />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Root