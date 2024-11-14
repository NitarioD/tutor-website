import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => {
  const dt = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-flex">
        <ul className="footer-links">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Terms</Link>
          </li>
          <li>
            <Link to="#">Privacy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <p>&copy; {dt} Tutor. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
