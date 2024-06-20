import React from "react";
import "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/styles/navbar.css";
import "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/hjem" className="nav-link">
        HOVEDSIDE
      </Link>
      <Link to="/informasjon" className="nav-link">
        INFORMASJON
      </Link>
      <Link to="/overnatting" className="nav-link">
        OVERNATTING
      </Link>
      <Link to="/ønskeliste" className="nav-link">
        ØNSKELISTE
      </Link>
      <Link to="/huset" className="nav-link">
        OM STEDET
      </Link>
      <Link to="/program" className="nav-link">
        PROGRAM
      </Link>
    </nav>
  );
};

export default Navbar;
