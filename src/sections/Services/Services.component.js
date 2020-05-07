import React from "react";

import Typography from "../../components/Typography/Typography.component";
import Spacer from "../../components/Spacer/Spacer.component";
import CTABox from "../../components/CTABox/CTABox.component";

import styles from "./Services.module.scss";
import storeIcon from "../../assets/storefront-icon.png";
import cartIcon from "../../assets/shopping-cart-icon.png";
import websiteIcon from "../../assets/website-icon.png";

const Services = () => {
  return (
    <div className={`services ${styles.services}`}>
      <Typography element="h2" weight="bold" align="center">
        I specialize in the following services
      </Typography>
      <Spacer size="lg" />
      <ul>
        <li>
          <img src={storeIcon} alt="Storefront Icon" />
          <Typography align="center">
            Websites for small businesses looking to start/upgrade their online
            presence.
          </Typography>
        </li>
        <li>
          <img src={cartIcon} alt="Shopping Cart Icon" />
          <Typography align="center">
            Bespoke and easy to use online shopping experiences.
          </Typography>
        </li>
        <li>
          <img src={websiteIcon} alt="Website Icon" />
          <Typography align="center">
            Web applications to solve your internal business needs.
          </Typography>
        </li>
      </ul>
      <Spacer size="lg" />
      <CTABox
        bodyText={`Feel free to reach out even if your product doesn't fit exactly into the above categories. Let's chat :)`}
      ></CTABox>
    </div>
  );
};

export default Services;
