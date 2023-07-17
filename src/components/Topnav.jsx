import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <ul className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <span>Page</span>
        </li>
      </ul> */}
      <div className="profile">
        <FontAwesomeIcon icon={faUser} />
        <span>John Doe</span>
      </div>
    </nav>
  );
};

export default Navbar;
