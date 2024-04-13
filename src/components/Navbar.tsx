import React from "react";
import "../styles/Navbar.scss";
import ButtonPrimary from "./ui/Button";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="logo__div">
          <img src="assets/images/logo.png" alt="logo" />
        </div>
        <div className="home__anchors">
          <ul>
            <li>Solutions</li>
            <li>Develop</li>
            <li>Examples</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ButtonPrimary>contact us</ButtonPrimary>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
