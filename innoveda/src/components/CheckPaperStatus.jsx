// src/components/CheckPaperStatus.jsx
import { Table, Container } from 'react-bootstrap';

const CheckPaperStatus = () => {
  // Mock data for the status of the submitted paper
  const paperStatusData = [
    {
      teamName: 'Team Alpha',
      paperTitle: 'Innovations in AI',
      feedback: 'Great work! Consider more examples.',
    },
    {
      teamName: 'Team Beta',
      paperTitle: 'Blockchain in Healthcare',
      feedback: 'Very informative but needs more depth in analysis.',
    },
  ];

  return (
    <Container style={{ marginTop: '80px' }}> {/* Margin to avoid overlap with navbar */}
      <h2 className="text-secondary fw-bold mb-4">Research Paper Status</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Paper Title</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {paperStatusData.map((paper, index) => (
            <tr key={index}>
              <td>{paper.teamName}</td>
              <td>{paper.paperTitle}</td>
              <td>{paper.feedback}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CheckPaperStatus;
