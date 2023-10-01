import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <nav role="navigation">
        <ul role="menubar">
          <li role="menuitem">
            <Link to="/" aria-label="Home page">Homepage</Link>
          </li>
          <li role="menuitem">
            <Link to="/about" aria-label="About Page">About</Link>
          </li>
          <li role="menuitem">
            <Link to="/login" aria-label="Login Page">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
    
  );
}
export default Menu;
