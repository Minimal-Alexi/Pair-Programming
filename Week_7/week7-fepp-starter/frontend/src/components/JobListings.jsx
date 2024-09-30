import { useContext } from "react";
import JobListing from "./JobListing";
import { jobContext } from "../contexts/jobContext";

const JobListings = () => {

  const { jobs ,handleDelete } = useContext(jobContext);

  return (
    <div className="job-list">
      {jobs.map((job) => {
        return (
          <JobListing key={job._id} job={job} handleDelete={handleDelete}/>
        )
      })}
    </div>
  );
};

export default JobListings;
