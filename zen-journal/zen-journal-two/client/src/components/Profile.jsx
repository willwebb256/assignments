import React, { useContext, useEffect, useState } from 'react';
import JournalList from './JournalList.jsx';
import JournalEntry from './JournalEntry.jsx';
import ZenQuote from './ZenQuote.jsx';
import { UserContext } from '../context/UserProvider.jsx';

export default function Profile() {
  const {
    user: { username },
    addEntry,
    getUserEntries,
    entries,
  } = useContext(UserContext);

  const [newEntry, setNewEntry] = useState({ title: '', description: '' });

  useEffect(() => {
    getUserEntries(); // Fetch user entries when the component mounts
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  const handleEntrySubmit = () => {
    // Ensure that both title and description are provided before submitting.
    if (newEntry.title && newEntry.description) {
      addEntry(newEntry)
        .then((createdEntry) => {
          // After successfully creating the entry, fetch the user's entries again.
          getUserEntries();
          // Clear the form fields
          setNewEntry({ title: '', description: '' });
        })
        .catch((error) => {
          console.error('Error creating the entry:', error);
        });
    }
  };
  

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <ZenQuote />
      <h3>^^^ Daily Inspiration from Zen Quote API ^^^</h3>
      <JournalEntry
        newEntry={newEntry}
        setNewEntry={setNewEntry}
        onEntrySubmit={handleEntrySubmit}
      />
      <h3>Your Journal Entries</h3>
      {entries.length > 0 ? (
        <JournalList entries={entries} />
      ) : (
        <p>No journal entries available.</p>
      )}
    </div>
  );
}
