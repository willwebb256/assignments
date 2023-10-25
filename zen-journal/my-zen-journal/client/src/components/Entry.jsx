import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export default function Issue(props) {
const {
title,
description,
_id,

} = props;


const { user, deleteEntry } = useContext(UserContext);


// Function to delete the issue
const handleDeleteEntry = () => {
// Call the deleteEntry function from the context with the issue's _id
deleteEntry(_id);
};
// console.log(title)
// console.log(upVotes)


return (
<div className="entry">
<h1>{title}</h1>
<h3>{description}</h3>


{/* Delete Entry button */}
{user._id === props.user && (
<button onClick={handleDeleteEntry}>Delete Entry</button>
)}

</div>
);
}
