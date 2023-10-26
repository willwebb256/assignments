import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserContext = React.createContext();


const userAxios = axios.create();


userAxios.interceptors.request.use((config) => {
const token = localStorage.getItem('token');
config.headers.Authorization = `Bearer ${token}`;
return config;
});


const commentAxios = axios.create()
commentAxios.interceptors.request.use((config) => {
const token = localStorage.getItem('token');
config.headers.Authorization = `Bearer ${token}`;
return config;
});


export default function UserProvider(props) {
const initState = {
user: JSON.parse(localStorage.getItem('user')) || {},
token: localStorage.getItem('token') || '',
entries: [],
errMsg: '',
};


const navigate = useNavigate();


const [userState, setUserState] = useState(initState);
const [publicState, setPublicState] = useState([]);



function signup(credentials) {
axios
.post('/auth/signup', credentials)
.then((res) => {
const { user, token } = res.data;
localStorage.setItem('token', token);
localStorage.setItem('user', JSON.stringify(user));
setUserState((prevUserState) => ({
...prevUserState,
user,
token,
}));
})
.catch((err) => handleAuthErr(err.response.data.errMsg));
}


function login(credentials) {
axios
.post('/auth/login', credentials)
.then((res) => {
const { user, token } = res.data;
localStorage.setItem('token', token);
localStorage.setItem('user', JSON.stringify(user));
getUserEntries();
setUserState((prevUserState) => ({
...prevUserState,
user,
token,
}));
})
.catch((err) => handleAuthErr(err.response.data.errMsg));
}


function logout() {
localStorage.removeItem('token');
localStorage.removeItem('user');
setUserState({
user: {},
token: '',
entries: [],
});
}


function handleAuthErr(errMsg) {
setUserState((prevState) => ({
...prevState,
errMsg,
}));
}


function resetAuthErr() {
setUserState((prevState) => ({
...prevState,
errMsg: '',
}));
}


function getUserEntries() {
userAxios
.get('/api/entry/user')
.then((res) => {
  console.log('getUserEntries', res.data)
setUserState((prevState) => ({
...prevState,
entries: res.data,
}));
})
.catch((err) => console.log(err.response.data.errMsg));
}


function getAllEntries() {
userAxios
.get('/api/entry')
.then((res) =>
setPublicState(res.data)
// setPublicState(prevState => ({
// ...prevState,
// issues: res.data
// }))
)
.catch((err) => console.log(err.response.data.errMsg));
}


function addEntry(newEntry) {
    return userAxios.post('/api/entry', newEntry)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          entries: [res.data],
        }));
        return res.data; // Return the newly created entry
      })
      .catch((err) => {
        console.log(err.response.data.errMsg);
        throw err; // Re-throw the error for handling in the component
      });
  }
  


  function deleteEntry(entryId) {
    userAxios
      .delete(`/api/entry/${entryId}`)
      .then((res) => {
        // Remove the deleted entry from the local state
        const updatedEntries = userState.entries.filter((entry) => entry._id !== entryId);
        setUserState((prevState) => ({
          ...prevState,
          entries: updatedEntries,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }




return (
<UserContext.Provider
value={{
...userState,
signup,
login,
logout,
addEntry,
getUserEntries,
getAllEntries,
resetAuthErr,
publicState,
deleteEntry,
}}
>
{props.children}
</UserContext.Provider>
);
}

export { UserContext, UserProvider }