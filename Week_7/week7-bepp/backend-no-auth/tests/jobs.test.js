const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app"); // Your Express app
const api = supertest(app);
const Job = require("../models/jobModel");

const Jobs = [
  {
    title: "Helsinki in 5 Days Job",
    type: "Full-Time",
    description: "https://www.course-api.com/images/Jobs/Job-1.jpeg",
    company: {
        name: "1900",
        contactEmail: "company1@company1.company1",
        contactPhone: "1234567"
    }
  },
  {
    title: "London in 7 Days Job",
    type: "Full-Time",
    description: "https://www.course-api.com/images/Jobs/Job-2.jpeg",
    company: {
        name: "2195",
        contactEmail: "company2@company2.company2",
        contactPhone: "7654321"
    }
  },
];

describe("Job Controller", () => {
  beforeEach(async () => {
    await Job.deleteMany({});
    await Job.insertMany(Jobs);
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  // Test GET /api/jobs
  it("should return all Jobs as JSON when GET /api/jobs is called", async () => {
    const response = await api
      .get("/api/jobs")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveLength(Jobs.length);
  });

  // Test POST /api/jobs
  it("should create a new Job when POST /api/jobs is called", async () => {
    const newJob = {
        title: "Programmer",
        type: "IT",
        description: "Beep boop robot",
        company: {
            name: "The IT HQ",
            contactEmail: "Evilinc@company1.company1",
            contactPhone: "6666666666"
        }
    };

    await api
      .post("/api/jobs")
      .send(newJob)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const JobsAfterPost = await Job.find({});
    expect(JobsAfterPost).toHaveLength(Jobs.length + 1);
    const JobNames = JobsAfterPost.map((Job) => Job.name);
    expect(JobNames).toContain(newJob.name);
  });

  // Test GET /api/jobs/:id
  it("should return one Job by ID when GET /api/jobs/:id is called", async () => {
    const foundJob = await Job.findOne();
    await api
      .get(`/api/jobs/${foundJob._id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("should return 404 for a non-existing Job ID", async () => {
    const nonExistentId = new mongoose.Types.ObjectId();
    await api.get(`/api/jobs/${nonExistentId}`).expect(404);
  });

  // Test PUT /api/jobs/:id
  it("should update one Job with partial data when PUT /api/jobs/:id is called", async () => {
    const foundJob = await Job.findOne();
    const updatedJob = {
        type: "Lmao",
        description: "Bad",
    };

    await api
      .put(`/api/jobs/${foundJob._id}`)
      .send(updatedJob)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    
    const updatedJobCheck = await Job.findById(foundJob._id);
    expect(updatedJobCheck.info).toBe(updatedJob.info);
    expect(updatedJobCheck.price).toBe(updatedJob.price);
  });

  it("should return 400 for invalid Job ID when PUT /api/jobs/:id", async () => {
    const invalidId = "12345";
    await api.put(`/api/jobs/${invalidId}`).send({}).expect(400);
  });

  // Test DELETE /api/jobs/:id
  it("should delete one Job by ID when DELETE /api/jobs/:id is called", async () => {
    const foundJob = await Job.findOne();
    await api.delete(`/api/jobs/${foundJob._id}`).expect(204);

    const deletedJobCheck = await Job.findById(Job._id);
    expect(deletedJobCheck).toBeNull();
  });

  it("should return 400 for invalid Job ID when DELETE /api/jobs/:id", async () => {
    const invalidId = "12345";
    await api.delete(`/api/jobs/${invalidId}`).expect(400);
  });
});
