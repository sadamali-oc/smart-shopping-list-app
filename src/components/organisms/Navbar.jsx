import React from "react";
import IconGroup from "../molecules/IconGroup";
import Search from "../molecules/Search";
import Brand from "../atoms/Brand";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
     <Brand name="ObaMart"/>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex flex-grow-1 me-3">
            <Search /> 
          </div>
          <ul className="navbar-nav ms-auto">
            <IconGroup />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
