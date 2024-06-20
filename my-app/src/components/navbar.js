import React, { useState } from "react";
import "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);

  const handleToggleSubcategories = () => {
    setShowSubcategories(!showSubcategories);
  };

  const handleCloseSubcategories = () => {
    setShowSubcategories(false);
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="nav-link">
        HOME
      </Link>

      <div className="nav-link" onClick={handleToggleSubcategories}>
        SELECTED WORK
        {showSubcategories && (
          <div className="sub-navbar" onClick={(e) => e.stopPropagation()}>
            <Link
              to="/selected-work/0"
              className="sub-navbar-link"
              onClick={handleCloseSubcategories}
            >
              Rainbow Lobster
            </Link>
            <Link
              to="/selected-work/1"
              className="sub-navbar-link"
              onClick={handleCloseSubcategories}
            >
              Flying Fish
            </Link>
            <Link
              to="/selected-work/2"
              className="sub-navbar-link"
              onClick={handleCloseSubcategories}
            >
              Mandarin Fish
            </Link>
            <Link
              to="/selected-work/3"
              className="sub-navbar-link"
              onClick={handleCloseSubcategories}
            >
              Rainbow Lobster
            </Link>
            <Link
              to="/selected-work/4"
              className="sub-navbar-link"
              onClick={handleCloseSubcategories}
            >
              Flying Fish
            </Link>
            <Link
              to="/selected-work/5"
              className="sub-navbar-link"
              onClick={handleCloseSubcategories}
            >
              Mandarin Fish
            </Link>
            <Link
              to="/selected-work/6"
              className="sub-navbar-link"
              onClick={handleCloseSubcategories}
            >
              Rainbow Lobster
            </Link>
            {}
          </div>
        )}
      </div>
      <Link to="/public-projects" className="nav-link">
        PUBLIC PROJECTS
      </Link>
      <Link to="/exhibitions" className="nav-link">
        EXHIBITIONS
      </Link>
      <Link to="/contact" className="nav-link">
        CONTACT
      </Link>
    </nav>
  );
};

export default Navbar;
