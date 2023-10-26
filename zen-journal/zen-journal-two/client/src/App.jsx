import { useState, useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Auth from './components/Auth';
import { UserContext, UserProvider } from './context/UserProvider';
import { Route, Routes, Navigate } from 'react-router-dom';



export default function App(){
  const { token, logout, user } = useContext(UserContext)
  return (
    <div className="app">
      { token && <Navbar logout={ logout }/> }
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/profile"/> : <Auth />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute token={token}>
            <Profile/>
          </ProtectedRoute>}
        />
      </Routes>
    </div>
  )
}