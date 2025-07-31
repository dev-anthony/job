import React from 'react'

const About = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        
        <div className="w-full md:w-1/2">
          <div className="h-80 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            <img
              src="public/job-bg.jpg"
              alt="About us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-black mb-4">About Us</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            We're dedicated to helping job seekers find opportunities that match their passion and skill set. Our platform connects top talent with companies looking to hire, offering a seamless and efficient job search experience.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Whether you're looking for remote work, full-time roles, or part-time gigs, we make it easy to discover and apply to jobs that fit your goals. Join thousands of professionals building their careers through our platform.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
