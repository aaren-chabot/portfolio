import React from 'react';
import { scroller } from 'react-scroll';

import styles from './NavLink.module.scss';

const NavLink = ({ href, icon, children, scrollTo }) => {
  const handleClick = () => {
    scroller.scrollTo(scrollTo, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50 // Scrolls to element + 50 pixels down the page
    });
  };

  return (
    <>
      {scrollTo ? (
        <span className={`navlink ${styles.navlink}`} onClick={handleClick}>
          {icon ? <i>Icon</i> : children}
        </span>
      ) : (
        <a className={`navlink ${styles.navlink}`} href={href}>
          {icon ? <i>Icon</i> : children}
        </a>
      )}
    </>
  );
};

export default NavLink;
