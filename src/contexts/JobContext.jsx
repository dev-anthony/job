import { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export function JobProvider( {children} ){
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
     const  fetchJobs = async  () => {
            try{
                const res = await fetch('public/jobs.json');
                const data = await res.json()
                setJobs(data);
                setLoading(false)
                console.log(data)
            }catch(err){
                console.log(err);
                setLoading(false)
            } 
        };
        fetchJobs();
    }, []);
    
    return(
        <JobContext.Provider value={{jobs, loading}}>
            {children}
        </JobContext.Provider>
    );
}