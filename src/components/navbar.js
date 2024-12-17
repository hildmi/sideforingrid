import React from "react";
import "../styles/navbar.css";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        HOVEDSIDE
      </Link>
      <Link to="/overnatting" className="nav-link">
        OVERNATTING
      </Link>
      <Link to="/ønskeliste" className="nav-link">
        ØNSKELISTE
      </Link>
      <Link to="/program" className="nav-link">
        PROGRAM
      </Link>
      <Link to="/huset" className="nav-link">
        OM STEDET
      </Link>
      <Link to="/informasjon" className="nav-link">
        INFORMASJON
      </Link>
    </nav>
  );
};

export default Navbar;
