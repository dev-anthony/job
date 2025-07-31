import React from 'react'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    
    <div className="w-full h-screen bg-[url('/job-bg.jpg')] bg-cover bg-center">
     <div>
       <NavBar/>
     </div>
      <div className="hero w-full h-full flex items-center flex-col justify-center text-white text-center p-4">
   <div className="max-w-[600px] text  px-4 py-4  bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
     <h2 className=" text-3xl font-bold sm:text-4xl sm:font-bold">
      Welcome to <span className='text-blue-500 '>Jo</span>bline!
    </h2>
    <h2 className='text-[20px] font-bold sm:text-3xl sm:font-bold '>You can choose your dream job.</h2>
    <p className='text-[16px] sm:text-xl'>Find great job for building your career. Have many jobs on this platform.</p>
   </div>
  </div>
    </div>
    <div>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App