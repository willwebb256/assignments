import React, { useState } from 'react';

const JournalEntry = ({ newEntry, setNewEntry, onEntrySubmit, isShow, entryyy, onDelete }) => {
  const { title, description } = newEntry ?? { title: '', description: '' };

  const handleTitleChange = (e) => {
    setNewEntry({ ...newEntry, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setNewEntry({ ...newEntry, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inside Hsubmit newEntry:', newEntry)
    onEntrySubmit();
  };

  const handleDelete = () => {
    onDelete(entryyy._id); // Pass the entry's ID to the onDelete function
  };

  return (
    <div>
      {!isShow ? 
        <>
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
        </>
      :
      <div>
        <h3>{entryyy.title}</h3>
        <h6>{entryyy.description}</h6>
        <button onClick={handleDelete}>Delete</button> {/* Add the delete button */}
      </div>
      }
    </div>
  );
};

export default JournalEntry;


