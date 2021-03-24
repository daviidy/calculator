import React from 'react';
import '../eventbrite.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from '../Routes';

const Navbar = () => (
  <>
    <header>
      <nav className="navbar navbar-expand-sm bg-white border-bottom fixed-top">
        <ul className="navbar-nav flex-row align-items-center">
          <li className="nav-item ml-3">
            <h1 className="text-uppercase p-2 bg-dark rounded text-white font-weight-bold">math magicians</h1>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <a href="/" className="p-2 text-dark nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/quote" className="p-2 text-dark nav-link">
              Quote of the day
            </a>
          </li>
          <li className="nav-item">
            <a href="/calculator" className="p-2 bg-oschool text-white rounded nav-link">
              Use calculator
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <Routes />
  </>

);
export default Navbar;
