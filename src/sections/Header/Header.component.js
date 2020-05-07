import React from "react";

import Logo from "../../components/Logo/Logo.component";
import Link from "../../components/Link/Link.component";
import NavLink from "../../components/NavLink/NavLink.component";

import styles from "./Header.module.scss";

const Header = () => {
  const { header, logo, navigation } = styles;
  return (
    <div className={`header ${header}`}>
      <div className={logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav className={navigation}>
        <ul>
          <li>
            <NavLink href="/">Github</NavLink>
          </li>
          <li>
            <NavLink href="/">Linkedin</NavLink>
          </li>
          <li>
            <NavLink href="/">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
