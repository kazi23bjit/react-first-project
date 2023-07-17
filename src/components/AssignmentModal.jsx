// Example of using a modal component for assignment creation

import React, { useState } from 'react';
import Modal from 'react-modal'; // Replace with your preferred modal library

const AssignmentModal = ({ isOpen, onClose, onCreateAssignment }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    // Validate input fields and create the assignment object
    const assignment = {
      title,
      description,
      dueDate,
    };

    // Call the assignment creation function passed from the parent component
    onCreateAssignment(assignment);
    // Close the modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Create Assignment</h2>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="Due Date"
        />
        <button type="button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </Modal>
  );
};
export default AssignmentModal;