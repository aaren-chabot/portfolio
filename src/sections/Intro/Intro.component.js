import React from 'react';

import Typography from '../../components/Typography/Typography.component';
import TitledLogo from '../../components/TitledLogo/TitledLogo.component';
import Spacer from '../../components/Spacer/Spacer.component';

import styles from './Intro.module.scss';
import image from '../../assets/intro-image.png';

const Intro = () => {
  const { intro, title, left, right, 'logo-list': logoList } = styles;
  return (
    <div className={`intro ${intro}`}>
      <Typography className={title} element="h1">
        Hi, I'm Aaren
      </Typography>
      <div className={left}>
        <Typography pSize="lg">
          I am web focused with a mind for user experience. I love building
          easily usable products.
        </Typography>
        <Typography>
          These are some technologies and platforms that I enjoy working with:
        </Typography>
        <Spacer size="xsm" />
        <ul className={logoList}>
          <li>
            <TitledLogo text="React" logo="react" />
          </li>
          <li>
            <TitledLogo text="JavaScript" logo="javascript" />
          </li>
          <li>
            <TitledLogo text="Wordpress" logo="wordpress" />
          </li>
          <li>
            <TitledLogo text="Angular" logo="angular" />
          </li>
          <li>
            <TitledLogo text="Node.js" logo="node" />
          </li>
          <li>
            <TitledLogo text="Shopify" logo="shopify" />
          </li>
        </ul>
      </div>
      <div className={right}>
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default Intro;
