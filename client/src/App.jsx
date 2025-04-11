import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  return(
    <div className="login-container">
    <h2 className="login-title">Login</h2>
    <form className="login-form">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default App
