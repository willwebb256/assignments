import React, { useState } from 'react';

const InputForm = ({ addBounty }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [living, setLiving] = useState(true);
  const [bountyAmount, setBountyAmount] = useState(0);
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBounty({ firstName, lastName, living, bountyAmount, type });
    setFirstName('');
    setLastName('');
    setLiving(true);
    setBountyAmount(0);
    setType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={living}
          onChange={(e) => setLiving(e.target.checked)}
        />
        Living
      </label>
      <input
        type="number"
        placeholder="Enter bounty amount"
        value={bountyAmount}
        onChange={(e) => setBountyAmount(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder="Enter bounty type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button type="submit">Add Bounty</button>
    </form>
  );
};

export default InputForm;

