import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Candidates() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [candidates, setCandidates] = useState([]);

  // Fetch candidates in real-time from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "jobs"), (snapshot) => {
      const candidatesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().manager, // Map manager to name for simplicity
        position: doc.data().title, // Map job title to position
        status: doc.data().status.toLowerCase(), // Ensure status is consistent
      }));
      setCandidates(candidatesList);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  // Filter candidates based on search and status filter
  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(search.toLowerCase()) ||
      candidate.position.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter ? candidate.status === statusFilter : true;
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
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Render Filtered Candidates */}
      {filteredCandidates.length > 0 ? (
        <div className="applicant-cards">
          {filteredCandidates.map((candidate) => (
            <div className="applicant-card" key={candidate.id}>
              <h3>{candidate.name}</h3>
              <p className="position">{candidate.position}</p>
              <div className={`status ${candidate.status}`}>
                {candidate.status === "open" && "Open"}
                {candidate.status === "closed" && "Closed"}
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
