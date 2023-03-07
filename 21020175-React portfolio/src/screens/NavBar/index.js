import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item pl-6">THEEKSHANA DHANANJI</a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="navbar-end mr-4">
        <div
          id="navbarBasicExaimport logo from './logo.svg';mple"
          className="navbar-menu"
        >
          <div className="navbar-start pr- 2 nav-white">
            <a className="navbar-item mx-3" href="#about">
              {" "}
              About{" "}
            </a>
            <a className="navbar-item mx-3" href="#Education">
              {" "}
              Education{" "}
            </a>
            <a className="navbar-item mx-3" href="#My services">
              {" "}
              My services{" "}
            </a>
            <a className="navbar-item mx-3" href="#Contact ME">
              {" "}
              Contacts{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
