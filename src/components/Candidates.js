import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

function Candidates() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Sample applicants data
  const applicants = [
    { id: 1, name: 'John Doe', position: 'Software Developer', status: 'hired' },
    { id: 2, name: 'Jane Smith', position: 'Full Stack Developer', status: 'rejected' },
    { id: 3, name: 'Alex Johnson', position: 'Product Manager', status: 'under-review' },
    { id: 4, name: 'Emily Clark', position: 'UI/UX Designer', status: 'hired' },
    { id: 5, name: 'Michael Brown', position: 'Backend Developer', status: 'rejected' },
    { id: 6, name: 'Sarah Lee', position: 'Frontend Developer', status: 'under-review' }
  ];

  // Filter applicants based on search and status filter
  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(search.toLowerCase()) || applicant.position.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter ? applicant.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="candidates-page">
      {/* Filter Inputs */}
      <div className="filters">
        <div className="filter-input-container">
          <FaSearch className="search-icon" /> {/* Search Icon */}
          <input 
            type="text" 
            placeholder="Search by Name or Position" 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            className="filter-input"
          />
        </div>

        <div className="status-filter">
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)} 
            className="filter-input"
          >
            <option value="">All Status</option>
            <option value="hired">Hired</option>
            <option value="rejected">Rejected</option>
            <option value="under-review">Under Review</option>
          </select>
        </div>
      </div>

      {/* Render Filtered Applicants */}
      {filteredApplicants.length > 0 ? (
        <div className="applicant-cards">
          {filteredApplicants.map((applicant) => (
            <div className="applicant-card" key={applicant.id}>
              <h3>{applicant.name}</h3>
              <p className="position">{applicant.position}</p>
              <div className={`status ${applicant.status}`}>
                {applicant.status === 'hired' && 'Hired'}
                {applicant.status === 'rejected' && 'Rejected'}
                {applicant.status === 'under-review' && 'Under Review'}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No candidates found.</p>
      )}
    </div>
  );
}

export default Candidates;
