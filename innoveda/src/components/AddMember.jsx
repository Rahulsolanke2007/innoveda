// src/components/AddMember.jsx
import { Button, Form } from 'react-bootstrap';

const AddMember = ({ members, setMembers }) => {
  const addMember = () => setMembers([...members, '']);
  const updateMember = (index, value) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  return (
    <div className="mb-3">
      <Form.Label>Team Members</Form.Label>
      {members.map((member, index) => (
        <Form.Control
          key={index}
          type="text"
          value={member}
          onChange={(e) => updateMember(index, e.target.value)}
          placeholder={`Member ${index + 1}`}
          className="mb-2"
        />
      ))}
      {members.length < 4 && (
        <Button variant="secondary" onClick={addMember}>
          + Add Member
        </Button>
      )}
    </div>
  );
};

export default AddMember;
