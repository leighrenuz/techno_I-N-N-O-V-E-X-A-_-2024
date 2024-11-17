import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import Jobs from './components/Jobs'; 
import Candidates from './components/Candidates'; // Import Candidates Component
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header Section (Now using .header class) */}
        <header className="header">
          <div className="logo">
            <h1>ApplyGabay</h1>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/login" className="nav-link">Login</Link>
            
          </div>
        </header>

        {/* Main Content Section */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/candidates" element={<Candidates />} /> {/* Route for Candidates */}
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 ApplyGabay. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
