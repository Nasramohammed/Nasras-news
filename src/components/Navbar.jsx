import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navbar_list">
          <Link to="/">Home</Link>
            <Link to="/topics">topics</Link>
            <Link to="/users">users</Link>
        </ul>
        
   </nav>
    </div>
  );
}

export default Navbar;
