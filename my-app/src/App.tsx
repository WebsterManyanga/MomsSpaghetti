import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="top-nav">
          <div className="logo"></div>
          <div className="deliverTo">
            Deliver to: 
            <span className="deliverTo__current">
              Current Location Warsaw
            </span>
          </div>
          <div className="top-nav__searchLogin">
            <input type="search" placeholder='Search Food' />
            <button>Login</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
