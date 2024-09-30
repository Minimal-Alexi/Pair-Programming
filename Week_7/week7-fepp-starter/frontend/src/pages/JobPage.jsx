import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobListing from "../components/JobListing";

const job = () => {
    const [jobs, setJobs] = useState([]);
    const { id } = useParams();
    const jobFetching = async () => {
        try {
            const response = await fetch(`/api/jobs/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                const data = await response.json();
                setJobs(data);
            }
        } catch (error) {
            console.error(error);
            console.error('Failed to fetch products')
        }
    }

    useEffect(() => {
        jobFetching();
    }, [id]);
    if (jobs.length == 0) {
        return <div>Loading...</div>;
      }
    return (
        <div className="job-list">
            <JobListing key={jobs._id} job={jobs} />
        </div>
    )
}

export default job;