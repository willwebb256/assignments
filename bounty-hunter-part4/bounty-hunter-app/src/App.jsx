import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from './InputForm';

function App() {
  const [bounties, setBounties] = useState([]);
  const [editingBountyId, setEditingBountyId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/inventory');
      setBounties(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addBounty = async (bounty) => {
    try {
      const response = await axios.post('/api/inventory', bounty);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const updateBounty = async (id, updatedBounty) => {
    try {
      const response = await axios.put(`/api/inventory/${id}`, updatedBounty);
      console.log(response.data);
      fetchData();
      setEditingBountyId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBounty = async (id) => {
    try {
      const response = await axios.delete(`/api/inventory/${id}`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const startEditing = (id) => {
    setEditingBountyId(id);
  };

  const cancelEditing = () => {
    setEditingBountyId(null);
  };

  return (
    <div>
      <h1>Bounty Hunter</h1>

      <InputForm addBounty={addBounty} />

      <ul>
        {bounties.map((bounty) => (
          <li key={bounty._id}>
            {editingBountyId === bounty._id ? (
              <>
                <input
                  type="text"
                  value={bounty.firstName}
                  onChange={(e) => {
                    const updatedBounty = { ...bounty, firstName: e.target.value };
                    updateBounty(bounty._id, updatedBounty);
                  }}
                />
                <input
                  type="text"
                  value={bounty.lastName}
                  onChange={(e) => {
                    const updatedBounty = { ...bounty, lastName: e.target.value };
                    updateBounty(bounty._id, updatedBounty);
                  }}
                />
                <input
                  type="checkbox"
                  checked={bounty.living}
                  onChange={(e) => {
                    const updatedBounty = { ...bounty, living: e.target.checked };
                    updateBounty(bounty._id, updatedBounty);
                  }}
                />
                <input
                  type="number"
                  value={bounty.bountyAmount}
                  onChange={(e) => {
                    const updatedBounty = { ...bounty, bountyAmount: parseInt(e.target.value) };
                    updateBounty(bounty._id, updatedBounty);
                  }}
                />
                <input
                  type="text"
                  value={bounty.type}
                  onChange={(e) => {
                    const updatedBounty = { ...bounty, type: e.target.value };
                    updateBounty(bounty._id, updatedBounty);
                  }}
                />
                <button onClick={cancelEditing}>Cancel</button>
              </>
            ) : (
              <>
                <span>{bounty.firstName}</span>
                <span>{bounty.lastName}</span>
                <span>{bounty.living ? 'Living' : 'Deceased'}</span>
                <span>{bounty.bountyAmount}</span>
                <span>{bounty.type}</span>
                <button onClick={() => startEditing(bounty._id)}>Edit</button>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this bounty?')) {
                      deleteBounty(bounty._id);
                    }
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




