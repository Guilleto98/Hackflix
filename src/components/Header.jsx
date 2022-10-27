import React from "react";
import Button from "react-bootstrap/esm/Button";
import { FaFilm} from 'react-icons/fa';
import {Link} from 'react-router-dom'



function Header() {
  return (
    <div className="header">
      <nav className="navbar d-flex justify-content-around">
        <div>
          
          <a className="navbar-brand link-color fw-bold fs-3" href="back">
          <FaFilm/> Hackflix 
          </a>
        </div>
        <div className="d-flex align-items-center">
        <a className="navbar-brand link-color fw-bold fs-3" href="back">
          Home
        </a>
        <Button variant="outline-danger h-25"><Link to='/search' className="text-decoration-none text-white">Search</Link></Button>
        </div>
      </nav>
      <div className="welcome">
        <h1>Your favorite movies are here!</h1>
        <small className="fs-5">WELCOME TO HACKFLIX</small>
      </div>
    </div>
  );
}

export default Header;
