import React, { useContext, useEffect } from 'react'
import JournalList from './JournalList.jsx'
import JournalEntry from './JournalEntry.jsx'
import { UserContext } from '../../../context/UserProvider.jsx'


export default function Profile(){
const {
user: {
username
},
addEntry,
getUserEntries,
entries
} = useContext(UserContext)


useEffect(() =>{
getUserIssues()
}, [])


return (
<div className="profile">
<h1>Welcome @{username}!</h1>
<h3>Add A Journal Entry</h3>
<JournalEntry addEntry={addEntry}/>
<h3>Your Journal Entries</h3>
<JournalList entries={entries}/>
</div>
)
}
