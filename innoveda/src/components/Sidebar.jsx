// src/components/Sidebar.jsx
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onSubmitPaperClick }) => {
  const location = useLocation();

  const sidebarStyle = {
    height: '100vh',
    position: 'fixed',
    top: '70px', // Same height as navbar
    left: 0,
    width: '250px',
    backgroundColor: '#f8f9fa',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  return (
    <div style={sidebarStyle}>
      <h4 className="text-primary fw-bold mb-4">Student Dashboard</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="#" onClick={onSubmitPaperClick} className="mb-2">
          Submit Research Paper
        </Nav.Link>
        <Nav.Link as={Link} to="/check-paper-status">
          Check Research Paper Status
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
