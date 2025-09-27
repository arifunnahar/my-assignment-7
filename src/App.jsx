import React from 'react'

import  IssueManagement from './components/IssueManagement'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
       
      <Navbar></Navbar>

     
    
      <IssueManagement/>
 
      <Footer></Footer>
      
    <ToastContainer/>
    </>
  )
}

export default App