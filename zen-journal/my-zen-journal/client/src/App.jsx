import { useState } from 'react'
import './App.css'
import ZenQuote from './components/ZenQuote.jsx';
import JournalEntry from './components/JournalEntry';
import JournalList from './components/JournalList';
import Entry from './components/Entry';



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
      <Entry></Entry>
      {/* Render the Journal Entry component for new entries */}
      <JournalEntry onEntrySubmit={addJournalEntry} />
      {/* Render the Journal List of all past entries */}
      <JournalList></JournalList>
    </div>
  );
};

export default App;
