import React from 'react';
import classname from 'clsx';

import styles from './Spacer.module.scss';

const Spacer = ({ size }) => {
  return <div className={classname(styles.spacer, styles[size])}></div>;
};

export default Spacer;
