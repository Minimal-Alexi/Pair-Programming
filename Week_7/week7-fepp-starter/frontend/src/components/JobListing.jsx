import { useNavigate } from "react-router-dom";

const JobListing = ({ job, handleDelete }) => {

  const navigate = useNavigate();

  const handleClick = () => 
    {
      navigate(`/${job._id}`)
    }

  return (
    <div className="job-preview" onClick={() => handleClick(job._id)}>
      <div>
        <h2>{job.title}</h2>
        <p>Type: {job.type}</p>
        <p>Description: {job.description}</p>
        <p>Company: {job.company.name}</p>
        <p>Company email: {job.company.contactEmail}</p>
        <p>Company phone: {job.company.contactPhone}</p>
      </div>
      <div>
        <button  onClick={() => handleDelete(job._id)}>Click me to delete</button>
      </div>
    </div>
  );
};

export default JobListing;
