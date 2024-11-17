import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you import Link for navigation
import '../styles/Dashboard.css'; // Ensure this CSS file is created for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>APPLYGABAY</h2>
        <ul>
          <li>
            <Link to="/" className="active">Dashboard</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link> {/* Corrected Jobs link */}
          </li>
          <li>
            <Link to="/candidates">Candidates</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Applicant Tracking System</h1>
          <div className="header-icons">
            <span role="img" aria-label="search">🔍</span>
            <span role="img" aria-label="notifications">🔔</span>
            <span role="img" aria-label="settings">⚙️</span>
          </div>
        </header>

        {/* Summary Section */}
        <section className="dashboard-summary">
          <h2>This Week's Overview</h2>
          <div className="summary-cards">
            <div className="card">
              <h3>20</h3>
              <p>New Candidates</p>
            </div>
            <div className="card">
              <h3>3</h3>
              <p>Upcoming Interviews</p>
            </div>
            <div className="card">
              <h3>2</h3>
              <p>Offers Sent</p>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="dashboard-calendar">
          <h2>Today's Date</h2>
          <div className="calendar-display">
            <h3>Sunday, October 3</h3>
            <p>No upcoming events</p>
          </div>
        </section>

        {/* Active Jobs Section */}
        <section className="dashboard-active-jobs">
          <h2>Active Jobs</h2>
          <ul>
            <li>Software Developer</li>
            <li>Software Engineer</li>
            <li>Full Stack Developer</li>
            <li>Mobile Developer</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
