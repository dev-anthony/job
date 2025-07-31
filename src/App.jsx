import React from 'react'
import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    
    <div className="w-full h-[90vh] bg-[url('/job-bg.jpg')] bg-cover bg-center">
     <div>
       <NavBar/>
     </div>
      <div className="hero w-full h-full flex items-center flex-col justify-center text-white text-center">
    <h2 className="text-4xl font-bold">
      Welcome to <span className='text-blue-500 shadow'>Jo</span>bline!
    </h2>
    <h2 className='text-4xl font-bold shadow'>You can choose your dream job</h2>
    <p className='shadow-2xl'>Find great job for building your career. Have many jobs on this platform.</p>
  </div>
    </div>
    <div>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App