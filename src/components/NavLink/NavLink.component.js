import React from "react";

import styles from "./NavLink.module.scss";

const NavLink = ({ href, icon, children }) => {
  return (
    <a className={`navlink ${styles.navlink}`} href={href}>
      {icon ? <i>Icon</i> : children}
    </a>
  );
};

export default NavLink;
