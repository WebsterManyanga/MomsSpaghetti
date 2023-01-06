import React from 'react';
import 'reset-css';
import './App.css';
import { TopNav } from './components/TopNav/TopNav';


function App() {
  return (
    <div className="App">
      <header className="header">
        <TopNav />
      </header>
    </div>
  );
}

export default App;
