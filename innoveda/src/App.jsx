// src/App.jsx or src/index.js (wherever your routes are defined)
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import StudentDashboard from './components/StudentDashboard';
import CheckPaperStatus from './components/CheckPaperStatus';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/check-paper-status" element={<CheckPaperStatus />} />
        {/* Add any additional routes here */}
      </Routes>
    </Router>
  );
};

export default App;
