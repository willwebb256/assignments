import React from 'react'
import JournalEntry from './JournalEntry.jsx'


export default function JournalList(props){
const { entries } = props
return (
<div className="journal-list">
{ entries.map(entry => <JournalEntry {...entry} key={entry._id}/>) }
</div>
)
}
