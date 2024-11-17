import { Link } from 'react-router-dom';
import { useState } from 'react';

function Jobs() {
  const [applicantInfo, setApplicantInfo] = useState({
    firstName: '',
    lastName: '',
    resumeUrl: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicantInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Applicant Info:', applicantInfo);
    setApplicantInfo({ firstName: '', lastName: '', resumeUrl: '', phoneNumber: '' });
  };

  const jobListings = [
    { id: 1, title: 'Software Developer', applicants: 12, manager: 'Leigh', status: 'Open' },
    { id: 2, title: 'Software Engineer', applicants: 9, manager: 'Leigh', status: 'Open' },
    { id: 3, title: 'Full Stack Developer', applicants: 8, manager: 'Leigh', status: 'Closed' },
    { id: 4, title: 'Mobile Developer', applicants: 3, manager: 'Leigh', status: 'Closed' }
  ];

  return (
    <div className="job-portal">
      {/* Sidebar Section */}
      <div className="sidebar">
        <h2 className="sidebar-logo">APPLYGABAY</h2>
        <ul className="sidebar-links">
          <li><Link to="/" className="nav-link">Dashboard</Link></li>
          <li><Link to="/jobs" className="nav-link active">Jobs</Link></li>
          <li><Link to="/candidates" className="nav-link">Candidates</Link></li>
          <li><Link to="/tasks" className="nav-link">Tasks</Link></li>
          <li><Link to="/messages" className="nav-link">Messages</Link></li>
          <li><Link to="/settings" className="nav-link">Settings</Link></li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Header Section */}
        <header className="header">
          <h1>Applicant Tracking System</h1>
        </header>

        {/* Content Area */}
        <div className="content">
          {/* Left Column: Job Listings */}
          <div className="job-listings">
            <h2>Active Job Listings</h2>
            <table className="jobs-table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Job Title</th>
                  <th>Applicants</th>
                  <th>Hiring Manager</th>
                </tr>
              </thead>
              <tbody>
                {jobListings.map((job) => (
                  <tr key={job.id}>
                    <td className={`status ${job.status.toLowerCase()}`}>{job.status}</td>
                    <td>{job.title}</td>
                    <td>{job.applicants}</td>
                    <td>{job.manager}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Column: Applicant Form */}
          <div className="applicant-form-container">
            <h3>Add Applicant</h3>
            <form onSubmit={handleSubmit} className="applicant-form">
              <input
                type="text"
                name="firstName"
                value={applicantInfo.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={applicantInfo.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
              <input
                type="url"
                name="resumeUrl"
                value={applicantInfo.resumeUrl}
                onChange={handleChange}
                placeholder="Resume URL"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={applicantInfo.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              <button type="submit" className="submit-btn">Add Applicant</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
