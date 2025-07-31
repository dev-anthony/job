import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
       
        <div>
          <h2 className="text-xl font-bold text-white mb-3"> <span className='text-blue-500 '>Jo</span>bline!
    </h2>
          <p className="text-sm text-gray-400">
            Helping professionals connect with top companies across the world. Find your dream job today.
          </p>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-white text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Jobline. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
