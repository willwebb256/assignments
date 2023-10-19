// src/components/JournalEntry.js
import React, { useState } from 'react';

const JournalEntry = () => {
  const [entry, setEntry] = useState('');

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission of the journal entry (e.g., save it to the backend).
    // You will need to implement the backend route for saving entries.
  };

  return (
    <div>
      <h2>Journal Entry</h2>
      <textarea rows="4" cols="50" value={entry} onChange={handleEntryChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JournalEntry;
