import { useState, useEffect } from "react";
import { getJobs } from "../services";
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [jobs, setJobs] = useState([]); 
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate()
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getJobs();
        if (res.status === 200) {
          const data = await res.json();
          setJobs(data);
        } else {
          console.log(res);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch is done
      }
    };

    fetchJobs();
  }, []);
   console.log(jobs)
  
  
    return (
      <div>
        <h1>Home</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          jobs.map((job) => (
            <div key={job._id}>
              <h2>{job.companyName}</h2> {/* Display the company name */}
              <p>{job.jobPosition}</p>
              <p>{job.salary}</p>
              <p>{job.jobDescription}</p>
              <p>{job.jobType}</p>
              <p>{job.skills}</p>
              <p>{job.location}</p>
              <p>{job.jobDescription}</p>
              <button onClick={() => navigate(`/editJob/${job._id}`)}>
                Edit
              </button>
              <button onClick={() => handleDeleteJob(job._id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    
    
  );
}
