import React, { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: "", manager: "", status: "Open" });

  // Fetch jobs in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "jobs"), (snapshot) => {
      const jobsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobsList);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  // Add a new job
  const addJob = async (e) => {
    e.preventDefault();
    if (!newJob.title || !newJob.manager) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      await addDoc(collection(db, "jobs"), newJob);
      setNewJob({ title: "", manager: "", status: "Open" });
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  // Update job status
  const updateJob = async (id, updatedStatus) => {
    try {
      const jobRef = doc(db, "jobs", id);
      await updateDoc(jobRef, { status: updatedStatus });
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  // Delete a job
  const deleteJob = async (id) => {
    try {
      const jobRef = doc(db, "jobs", id);
      await deleteDoc(jobRef);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="main-content">
      <div className="header">
        <h1>Job Management</h1>
      </div>
      <div className="content">
        {/* Add New Job Form */}
        <div className="applicant-form-container">
          <h3>Add New Job</h3>
          <form onSubmit={addJob}>
            <input
              type="text"
              placeholder="Job Title"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Hiring Manager"
              value={newJob.manager}
              onChange={(e) => setNewJob({ ...newJob, manager: e.target.value })}
              required
            />
            <button type="submit">Add Job</button>
          </form>
        </div>

        {/* Job List Table */}
        <div className="job-listings">
          <h3>Job Listings</h3>
          <table className="jobs-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Manager</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.manager}</td>
                  <td>
                    <span className={`status ${job.status.toLowerCase()}`}>
                      {job.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => updateJob(job.id, job.status === "Open" ? "Closed" : "Open")}>
                      Toggle Status
                    </button>
                    <button onClick={() => deleteJob(job.id)} style={{ marginLeft: "10px" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Jobs;


