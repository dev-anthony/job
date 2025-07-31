import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <div>
    <div className='flex w-full items-center justify-around py-4 px-4 text-white'>
      <div className="logo">
        <h2 className='text-3xl font-bold'><span className='text-blue-500'>Jo</span>bline</h2>
      </div>
      <nav  className=' justify-between items-center font-bold hidden sm:flex gap-6 '>
        <Link className='hover:text-blue-500 transition-all duration-400 ease-in-out' to="/">Home</Link>
         <Link className='hover:text-blue-500 transition-all duration-400 ease-in-out' to="/jobs">Jobs</Link>
         <Link className='hover:text-blue-500 transition-all duration-400 ease-in-out' to="/blog">Blog</Link>
         <Link className='hover:text-blue-500 transition-all duration-400 ease-in-out' to="/about">About</Link>
         <Link className='hover:text-blue-500 transition-all duration-400 ease-in-out' to="/contact">Contact</Link>
      </nav>
      <div>
        <button className='bg-blue-500 px-4 py-1.5 hover:bg-blue-600 transition:color duration-500 hidden sm:block'>
         + Register
        </button>
      </div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden text-2xl focus:outline-none">
          {isMenuOpen ? (<span className="text-xl">✖</span>) : (<span className="text-2xl font-bold">☰</span>)}
      </button>
    </div>
      {isMenuOpen && (
        <div className="flex flex-col h-screen absolute top-0 left-0 items-center w-[250px]
                         sm:hidden bg-blue-400 text-xl text-white font-bold pt-4 gap-6 shadow-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Jobs</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <button className='bg-blue-300 px-4 py-1.5 hover:bg-blue-400 transition:color duration-500'>
         + Register
        </button>
        </div>
      )}
    </div>
    </>
  )
}

export default NavBar