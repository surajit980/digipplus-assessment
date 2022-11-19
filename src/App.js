import React from 'react'
// import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyJobs from './pages/MyJobs'
import MyPayment from './pages/MyPayment'
import MyOfferLetter from './pages/MyOfferLetter'
import MyCertificate from './pages/MyCertificate'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/my-jobs' element={<MyJobs/>}/>
      <Route path='/my-payment' element={<MyPayment/>}/>
      <Route path='/my-offerletter' element={<MyOfferLetter/>}/>
      <Route path='/my-certificate' element={<MyCertificate/>}/>
    </Routes>
    </>
  )
}

export default App
