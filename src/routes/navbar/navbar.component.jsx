import React, { useEffect } from "react";

import { Outlet, Link } from "react-router-dom";
import { ReactComponent as TutorLogo } from "../../assets/images/logo.svg";

import "./navbar.styles.scss";
import NavLink from "../../components/navlink/navlink.component";

const NavBar = () => {
  const linkDets = [
    {
      linkDestinationURL: "#",
      linkTag: "Home",
      externalLink: false,
      children: null,
    },
    {
      linkDestinationURL: "#chapters",
      linkTag: "Chapters",
      externalLink: false,
      children: null,
    },
    {
      linkDestinationURL: "#summary",
      linkTag: "Summary",
      externalLink: false,
      children: null,
    },
    {
      linkDestinationURL: "#takeaways",
      linkTag: "Takeaways",
      externalLink: false,
      children: null,
    },
    {
      linkDestinationURL: "#author",
      linkTag: "Author",
      externalLink: false,
      children: null,
    },
    {
      linkDestinationURL: "/contact",
      linkTag: "Contact",
      externalLink: false,
      children: null,
    },
    {
      linkDestinationURL: "https://facebook.com",
      linkTag: null,
      externalLink: true,
      children: <i className="fa-brands fa-facebook"></i>,
    },
    {
      linkDestinationURL: "https://twitter.com",
      linkTag: null,
      externalLink: true,
      children: <i className="fa-brands fa-twitter"></i>,
    },
  ];

  const handleToggleMenuForMobile = () => {
    const mobileMenuList = document.querySelector(".mobile-menu-items");

    mobileMenuList.classList.toggle("active");
  };

  // change navbar background on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("navbar-scroll");
      } else {
        navbar.classList.remove("navbar-scroll");
      }
    });
  }, []);
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-flex container">
          <Link to="/" className="logo-container" aria-label="Logo Home Link">
            <TutorLogo />
          </Link>
          <div className="main-menu-items">
            <ul className="main-menu-list">
              {linkDets.map(({ children, ...otherprops }, idx) => (
                <NavLink {...otherprops} key={idx}>
                  {children}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-menu">
            {/* Hamburger button */}
            <div
              className="mobile-menu-toggle"
              onClick={handleToggleMenuForMobile}
            >
              <i className="fas fa-bars fa-2x"></i>
            </div>
            {/* Mobile Menu Items */}
            <div className="mobile-menu-items">
              <ul className="mobile-menu-list">
                {linkDets.map(({ children, ...otherprops }, idx) => (
                  <NavLink {...otherprops} key={idx}>
                    {children}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
