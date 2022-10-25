import React from "react";

function Header() {
  return (
    <div className="header">
      <nav className="navbar d-flex justify-content-around">
        <a className="navbar-brand link-color fw-bold fs-3" href="back">
          Hackflix
        </a>
        <a className="navbar-brand link-color fw-bold fs-3" href="back">
          Home
        </a>
      </nav>
      <div className="welcome">
        <h1>Tus peliculas favoritas!</h1>
        <small>Bienvenidos a la nueva Cuevana</small>
      </div>
    </div>
  );
}

export default Header;
