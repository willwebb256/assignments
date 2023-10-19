import React, { useState } from 'react';

const JournalEntry = ({ onEntrySubmit }) => {
  const [entry, setEntry] = useState('');

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSubmit = () => {
    // Create a new entry object with the content and an identifier (e.g., timestamp).
    const newEntry = {
      content: entry,
      id: Date.now(), // You can use a better way to generate IDs.
    };

    // Call the `onEntrySubmit` function to add the new entry to your app's state.
    onEntrySubmit(newEntry);

    // Clear the text area after submission.
    setEntry('');
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


