import React from 'react';

import styles from './Link.module.scss';

const Link = ({ text, withIcon, href, children }) => {
  const { link, wrapper } = styles;
  return (
    <a data-text={text} className={children ? wrapper : link} href={href}>
      {withIcon ? <div>{withIcon}</div> : null}
      {children ? children : text}
    </a>
  );
};

export default Link;
