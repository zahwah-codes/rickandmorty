import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import "../../App.css";

const Navbar = () => {
  return (
    <nav className= {`${styles.nav} navbar navbar-expand-lg mb-4 `}>
      <div className="container">
        <Link to="/" className={`${styles.logo} navbar-brand`}style={{ textDecoration: 'none', color: "black" }}>
          Rick & Morty <span className={styles.logoWiki}>WiKi</span>
        </Link>

        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >

          <div className={`${styles.navbarLinks} navbar-nav fs-5 `}>
            <NavLink className="nav-link" activeClassName="active" to="/" style={{ textDecoration: 'none', color: "black",  marginRight: '1rem', paddingBottom: '0.2rem', marginLeft: '1rem' }}>
              Characters
            </NavLink>

            <NavLink to="/episodes" className="nav-link" style={{ textDecoration: 'none', color: "black",  marginRight: '1rem', paddingBottom: '0.2rem', marginLeft: '1rem' }}>
              Episode
            </NavLink>

            <NavLink
              activeClassName="active"
              to="/location"
              className="nav-link"
              style={{ textDecoration: 'none', color: "black", paddingBottom: '0.2rem', marginLeft: '1rem' }}
            >
              Location
            </NavLink>

          </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;