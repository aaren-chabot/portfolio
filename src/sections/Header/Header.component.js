import React from 'react';

import Logo from '../../components/Logo/Logo.component';
import Link from '../../components/Link/Link.component';
import NavLink from '../../components/NavLink/NavLink.component';
import Icon from '../../components/Icon/Icon.component';

import styles from './Header.module.scss';

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
            <NavLink href="/">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/">Contacts</NavLink>
          </li>
          <li>
            <NavLink href="https://www.linkedin.com/in/aaren-chabot-ab936792/">
              <Icon icon="linkedin" />
            </NavLink>
          </li>
          <li>
            <NavLink href="https://github.com/aaren-chabot">
              <Icon icon="github" />
            </NavLink>
          </li>
          <li>
            <NavLink href="https://www.hackerrank.com/chabot_aaren">
              <Icon icon="hackerrank" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
