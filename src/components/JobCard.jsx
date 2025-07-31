// import React from 'react'
// import { useContext } from 'react'
// import { JobContext } from '../contexts/JobContext'
// const JobCard = () => {
//     const {jobs, loading} = useContext(JobContext)
//     if (loading) return <p>loading jobs...</p>
    
//   return (
//     <div>
//         {jobs.length === 0 ? (<p>No jobs available</p>) : jobs.map((item)=>{
//            return (
//             <div key={item.id}>
//                 <p>{item.title}</p>
//                  <p>{item.company}</p>
//                   <p>{item.location}</p>
//             </div>
//             )
//         })}
//     </div>
//   )
// }

// export default JobCard


import React, { useContext, useState } from 'react'
import { JobContext } from '../contexts/JobContext'

const JobCard = () => {
  const { jobs, loading } = useContext(JobContext)
  const [expandedIds, setExpandedIds] = useState([])

  const toggleReadMore = (id) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  if (loading) return <p className="text-center py-10">Loading jobs...</p>

  if (jobs.length === 0) return <p className="text-center py-10">No jobs available</p>

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Jobs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((item) => {
          const isExpanded = expandedIds.includes(item.id)
          const shortDesc = item.description.slice(0, 60) + '...'

          return (
            <div
              key={item.id}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 transition duration-300 hover:shadow-lg"
            >
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.company} • {item.location}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-2 mb-4 text-sm text-white">
                <span className="bg-blue-600 px-4 py-2 shadow-2xl hover:bg-blue-500 transition-all duration-300 ease-in-out rounded-full">{item.type}</span>
                <span className=" bg-slate-950 px-4 py-2 shadow-2xl hover:bg-slate-900 transition-all duration-300 ease-in-out rounded-full">{item.category}</span>
                <span className="bg-gray-600 px-4 py-2 shadow-2xl hover:bg-gray-500 transition-all duration-300 ease-in-out rounded-full">{item.salary}</span>
              </div>

              <p className="text-gray-700 text-sm">
                {isExpanded ? item.description : shortDesc}
              </p>

              <button
                onClick={() => toggleReadMore(item.id)}
                className="mt-3 text-blue-600 text-sm font-medium hover:underline focus:outline-none"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JobCard
