import React from 'react'
import JobCard from '../components/JobCard'
import Blog from './Blog'
import About from './About'
import Contact from './Contact'
import Footer from '../components/Footer'
const Dashboard = () => {
  return (
    <div>
      <div className=" bg-white text-center px-20 pb-12 min-h-[50vh] flex flex-col mt-12">
        <h2 className=' text-2xl font-bold sm:text-4xl sm:font-bold'>Popular Category</h2>
        <p className='text-gray-500 text-[14px] mt-2 sm:text-[18px]'>Many desktop publishing packages and web page editors.</p>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-7 mb-2'>
          <div className="card bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
            <p>Accounting Finance(305)</p>
          </div>
          <div className="card bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
            <p>Product/Operation(95)</p>
          </div>
          <div className="card  bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
            <p>Design/Creative(150)</p>
          </div>
          <div className="card  bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
            <p>Marketing/Sales(150)</p>
          </div>
             <div className="card  bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
           <p> Engineering/Tech(200)</p>
          </div>
             <div className="card  bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
            <p>Human Resource(150)</p>
          </div>
             <div className="card  bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
            <p>Customer Service(80)</p>
          </div>
          <div className="card  bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
              <p> Data Entry(60)</p>
          </div>
          <div className="card  bg-gray-200 shadow-2xs px-3 py-4 text-[14px] sm:text-[18px]">
           <p> Telecommunication(255)</p>
          </div>
        </div>
      </div>

      <div className="">
        <JobCard/>
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard


// import React from 'react'
// import JobCard from '../components/JobCard'

// const Dashboard = () => {
//   return (
//     <>
//       <div className="hero" id="home"></div>

//       <section id="blog" className="min-h-screen bg-gray-100 p-8">
//         <h2 className="text-3xl font-bold">Blog Section</h2>
//         {/* Blog content */}
//       </section>

//       <section id="about" className="min-h-screen bg-gray-200 p-8">
//         <h2 className="text-3xl font-bold">About Us</h2>
//         {/* About content */}
//       </section>

//       <section id="contact" className="min-h-screen bg-gray-300 p-8">
//         <h2 className="text-3xl font-bold">Contact</h2>
//         {/* Contact content */}
//       </section>

//       <JobCard />
//     </>
//   )
// }

// export default Dashboard
