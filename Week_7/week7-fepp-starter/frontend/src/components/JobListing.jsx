const JobListing = ({ job }) => {
  return (
    <div className="job-preview">
      <h2>{job.title}</h2>
      <p>Type: {job.type}</p>
      <p>Description: {job.description}</p>
      <p>Company: {job.company.name}</p>
      <p>Company email: {job.company.contactEmail}</p>
      <p>Company phone: {job.company.contactPhone}</p>
    </div>
  );
};

export default JobListing;
