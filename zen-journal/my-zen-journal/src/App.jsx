import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ZenQuote from './ZenQuote.jsx';
import JournalEntry from './JournalEntry';

const App = () => {
  const [journalEntries, setJournalEntries] = useState([]);

  // Function to add a new journal entry to the state.
  const addJournalEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
  };

  return (
    <div>
      <ZenQuote></ZenQuote>
      {/* Render existing journal entries */}
      {journalEntries.map((entry, index) => (
        <div key={index}>{entry}</div>
      ))}

      {/* Render the Journal Entry component for new entries */}
      <JournalEntry onEntrySubmit={addJournalEntry} />
    </div>
  );
};

export default App;
