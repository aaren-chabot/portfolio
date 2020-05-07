import React from "react";

import Logo from "../../components/Logo/Logo.component";
import Link from "../../components/Link/Link.component";
import NavLink from "../../components/NavLink/NavLink.component";
import Typography from "../../components/Typography/Typography.component";

import styles from "./Footer.module.scss";

const Footer = () => {
  const {
    footer,
    container,
    "social-list": socialList,
    nav,
    copywrite,
  } = styles;
  return (
    <div className={`footer ${footer}`}>
      <div className={container}>
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className={nav}>
          <div className={socialList}>
            <NavLink href="/">GH</NavLink>
            <NavLink href="/">IN</NavLink>
            <NavLink href="/">TW</NavLink>
            <NavLink href="/">IG</NavLink>
          </div>
          <NavLink href="/">Projects</NavLink>
          <NavLink href="/">Contact</NavLink>
        </div>
        <div className={copywrite}>
          <Typography pSize="sm">
            &copy; 2020 Aaren Chabot. All Rights Reserved. Designed by Vindhya
            Raviraj. Illustrations by <NavLink href="/">Icon 8</NavLink>. Icons
            from <NavLink href="/">Font Awesome</NavLink>. Emojis sourced from{" "}
            <NavLink href="/">Twemoji</NavLink>.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
