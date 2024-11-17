import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Consulting Website</h1>
      <div>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/portfolio" style={{ margin: "0 10px" }}>
          Portfolio
        </Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
