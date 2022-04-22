import logo from './logo.svg';
import './App.css';

import React from 'react'
import AppRoutes from './Routes'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
