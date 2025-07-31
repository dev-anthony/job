import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../contexts/JobContext'
const JobCard = () => {
    const {jobs, loading} = useContext(JobContext)
    if (loading) return <p>loading jobs...</p>
    
  return (
    <div>
        {jobs.length === 0 ? (<p>No jobs available</p>) : jobs.map((item)=>{
           return (
            <div key={item.id}>
                <p>{item.title}</p>
                 <p>{item.company}</p>
                  <p>{item.location}</p>
            </div>
            )
        })}
    </div>
  )
}

export default JobCard