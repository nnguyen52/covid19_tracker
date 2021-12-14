import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchBoxCountry from "../SearchBox/SearchBoxCountry";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ position: "sticky" }}
        fixed="top"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand style={{ marginLeft: "10px" }}>
            Covid Tracker
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" style={{ marginLeft: "10px" }}>
              Home
            </Link>
            <Link
              to="/advancedStats"
              style={{ marginLeft: "10px", marginRight: "50px" }}
            >
              Advanced Search
            </Link>
            <Link
              to="/documentation"
              style={{ marginLeft: "10px", marginRight: "50px" }}
            >
              Documentation
            </Link>
          </Nav>
          <SearchBoxCountry />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
