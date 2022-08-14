import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { Stack } from './pages/Stack';
import { Counter } from './pages/Counter';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          Vite 🚀 + React 🧱 + Typescript 📘 & <br />
          Tailwindcss 🌠 + React Router & <br />
          Eslint 🔥 + Prettier 💄
        </p>

        <div className="body">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
