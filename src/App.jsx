import React from 'react'

import  IssueManagement from './components/IssueManagement'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
       
      <Navbar></Navbar>
      
      <div className="">
    
      <IssueManagement/>
    </div>
      <Footer></Footer>
      
    <ToastContainer/>
    </>
  )
}

export default App