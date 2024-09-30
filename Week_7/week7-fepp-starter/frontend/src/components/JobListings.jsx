import { useEffect, useState } from "react";
import JobListing from "./JobListing";

const JobListings = () => {

  const [jobs, setJobs] = useState([]);

  const jobFetching = async () => {
    try {
      const response = await fetch('/api/jobs',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        },)
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setJobs(data);
        console.log(jobs);
      }

    }
    catch (error) {
      console.error(error);
      console.error('Failed to fetch products');
    }
  }

  useEffect(() => {
    jobFetching();
  }, [])

  return (
    <div className="job-list">
      {jobs.map((job, index) => {
        return (
          <JobListing key={index} job={job} />
        )
      })}
    </div>
  );
};

export default JobListings;
