import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="login/">Inventory</Link>
    </div>
  );
}

export default App;
