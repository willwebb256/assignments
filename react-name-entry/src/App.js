import React, { useState } from 'react';
import BoxContainer from './BoxContainer'
 
function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setNames([...names, name]);
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Add Name</button>
      </form>
      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
    
    <div className="App">
      <BoxContainer />
    </div>
      </ol>
    </div>
  )
}
 
export default App;









