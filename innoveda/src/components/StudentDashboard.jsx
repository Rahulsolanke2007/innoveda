// src/components/StudentDashboard.jsx
import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const StudentDashboard = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const toggleSubmitForm = () => {
    setShowSubmitForm((prev) => !prev); // Toggle the visibility of the submit form
  };

  return (
    <Row style={{ marginTop: '80px' }}>
      <Col xs={12} md={2} className="p-0">
        <Sidebar onSubmitPaperClick={toggleSubmitForm} />
      </Col>
      <Col xs={12} md={10} className="p-4">
        <div className="text-center">
          <h2 className="text-secondary fw-bold mb-4">Student Dashboard</h2>
          <Button
            variant="primary"
            onClick={toggleSubmitForm}
            className="mb-3"
          >
            {showSubmitForm ? 'Hide Submit Paper Form' : 'Submit Research Paper'}
          </Button>
        </div>

        {showSubmitForm && (
          <div className="submit-paper-form border p-4 rounded bg-light mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            <h3 className="text-center">Submit Research Paper</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="teamName" className="form-label">Team Name</label>
                <input type="text" className="form-control" id="teamName" required />
              </div>
              <div className="mb-3">
                <label htmlFor="paperTitle" className="form-label">Paper Title</label>
                <input type="text" className="form-control" id="paperTitle" required />
              </div>
              <div className="mb-3">
                <label htmlFor="driveLink" className="form-label">Research Paper Drive Link</label>
                <input type="url" className="form-control" id="driveLink" required />
              </div>
              <div className="text-center">
                <Button type="submit" variant="success">Submit</Button>
              </div>
            </form>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default StudentDashboard;
