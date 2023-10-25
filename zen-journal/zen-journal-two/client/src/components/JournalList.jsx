import React from 'react';
import JournalEntry from './JournalEntry.jsx';

export default function JournalList(props) {
  const { entries } = props;

  if (!Array.isArray(entries) || entries.length === 0) {
    return (
      <div className="journal-list">
        <p>No journal entries available.</p>
      </div>
    );
  }

  return (
    <div className="journal-list">
      {entries.map(entry => (
        <JournalEntry {...entry} key={entry._id} isShow={true} entryyy={entry} />
      ))}
    </div>
  );
}

