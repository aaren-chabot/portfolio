import React from 'react';

import Typography from '../Typography/Typography.component';
import Button from '../Button/Button.component';

import styles from './CTABox.module.scss';

const CTABox = ({ bodyText, ctaText, buttonClick }) => {
  const { ctabox, body, cta } = styles;
  return (
    <div className={ctabox}>
      <div className={body}>
        <Typography weight="semi">{bodyText}</Typography>
      </div>
      <div className={cta}>
        <Button></Button>
      </div>
    </div>
  );
};

export default CTABox;
