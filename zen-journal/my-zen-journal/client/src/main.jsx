import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserProvider.jsx'
import './index.css'
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';


const root = ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <UserProvider>
        <App />
    </UserProvider>
</BrowserRouter>
);
