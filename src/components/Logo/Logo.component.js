import React from "react";

import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={`logo ${styles.logo}`}>
      <LogoSVG />
    </div>
  );
};

export default Logo;
