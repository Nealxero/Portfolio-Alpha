import React from "react";
import "../../styles/navbar.css";
import { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container">
        <a className="navbar-brand" type="" href="#Home">
          {"{ Santi }"}
        </a>
        <button
          id="navBut"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleMenuClick}
        >
          <BsList />
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About2" onClick={closeMenu}>
                About 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects2" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills2" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact2" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
