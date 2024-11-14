import React from "react";

import "./navlink.styles.scss";

const NavLink = ({ linkDestinationURL, linkTag, externalLink, children }) => {
  return (
    <>
      {externalLink ? (
        <li>
          <a href={linkDestinationURL} target="_blank" rel="noreferrer">
            {children}
          </a>
        </li>
      ) : (
        <li>
          <a href={linkDestinationURL}>{linkTag}</a>
        </li>
      )}
    </>
  );
};

export default NavLink;
