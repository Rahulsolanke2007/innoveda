// src/components/Signup.jsx
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AddMember from './AddMember';

const Signup = () => {
  const [userType, setUserType] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [members, setMembers] = useState(['']);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ email, password, userType, members, employeeId });
    navigate('/login');
  };

  return (
    <Container className="container-full">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
              <Form.Label>Account Type</Form.Label>
              <Form.Select value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>

            {userType === 'faculty' && (
              <Form.Group className="mb-3">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder="Enter Employee ID"
                />
              </Form.Group>
            )}

            {userType === 'student' && <AddMember members={members} setMembers={setMembers} />}

            <Button variant="primary" type="submit" className="w-100">Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
