import './sidebar.css';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faCog, faUsers, faTimes, faBars, faCalendarAlt  } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({isSidebarOpen, toggleSidebar}) => {

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
      </div>
      <nav className="sidebar-nav">
        <ul className={`sidebar-nav-list ${isSidebarOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className={isSidebarOpen ? 'hidden' : 'sidebar-icon'} style={{ color: 'white', textDecoration:'none' }} >
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to = "/"><span className={isSidebarOpen ? 'item-name' : 'hidden'} style={{ color: 'white', textDecoration:'none' }}>Home</span></Link>
          </li>
          <li>
            <Link to="/schedules" className={isSidebarOpen ? 'hidden' : 'sidebar-icon'} style={{ color: 'white' }}>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </Link>
            <Link to = "/schedules"><span className={isSidebarOpen ? 'item-name' : 'hidden'} style={{ color: 'white', textDecoration:'none' }}>schedules</span></Link>
          </li>
          <li>
            <div className="dropdown">
              <Link to="#" className={isSidebarOpen ? 'hidden' : 'sidebar-icon'}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
              <span className={isSidebarOpen ? 'item-name' : 'hidden'}>Contact</span>
              <div className="dropdown-content">
                <Link to="#">Email</Link>
                <Link to="#">Phone</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="#" className={isSidebarOpen ? 'hidden' : 'sidebar-icon'}>
              <FontAwesomeIcon icon={faCog} />
            </Link>
            <span className={isSidebarOpen ? 'item-name' : 'hidden'}>Settings</span>
          </li>
          <li>
            <div className="dropdown">
              <Link to="#" className={isSidebarOpen ? 'hidden' : 'sidebar-icon'}>
                <FontAwesomeIcon icon={faUsers} />
              </Link>
              <span className={isSidebarOpen ? 'item-name' : 'hidden'}>Users</span>
              <div className="dropdown-content">
                <Link to="#">Admin</Link>
                <Link to="#">User</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
