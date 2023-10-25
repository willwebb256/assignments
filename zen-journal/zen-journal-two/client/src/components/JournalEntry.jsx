import React, { useState } from 'react';

const JournalEntry = ({ newEntry, setNewEntry, onEntrySubmit }) => {
  const { title, description } = newEntry ?? { title: '', description: '' };

  const handleTitleChange = (e) => {
    setNewEntry({ ...newEntry, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setNewEntry({ ...newEntry, description: e.target.value });
  };

  const handleSubmit = () => {
    onEntrySubmit();
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>Journal Entry</h2>
      <p style={{ color: 'white' }}>Your journal content goes here.</p>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          rows="4"
          cols="50"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JournalEntry;


