import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import './TopNav.css';

export const TopNav = () => (
  <nav className="top-nav">
  <div className="logo">
    <div className="logo"></div>
  </div>
  <div className="deliverTo">
    <span className="deliverTo__text">Deliver to:</span>
    <span className="deliverTo__current">
      Warsaw
    </span>
  </div>
  <div className="top-nav__searchLogin">
    <SearchBar />
    <a href="#" className="top-nav__login">Login</a>
  </div>
</nav>
)
