import { useState, useEffect } from "react"
import { getJobs } from "../services"
export default function Home() {
    const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
      const fetchJobs = async () => {
        const res = await getJobs();
          if (res.status === 200) {
            const data = await res.json()
            setJobs(data);
          } else {
            console.log( res);
          }
       
      }
  
      fetchJobs();
    }, []);
  
    console.log(jobs);
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}