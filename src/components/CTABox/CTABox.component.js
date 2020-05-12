import React from 'react';
import { scroller } from 'react-scroll';

import Typography from '../Typography/Typography.component';
import Button from '../Button/Button.component';

import styles from './CTABox.module.scss';

const CTABox = ({ bodyText, ctaText, onClick, anchor }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }

    if (anchor) {
      scroller.scrollTo(anchor, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50
      });
    }
  };

  const { ctabox, body, cta } = styles;
  return (
    <div className={ctabox}>
      <div className={body}>
        <Typography weight="semi">{bodyText}</Typography>
      </div>
      <div className={cta}>
        <Button onClick={handleClick}>{ctaText}</Button>
      </div>
    </div>
  );
};

export default CTABox;
