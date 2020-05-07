import React from 'react';

import Icon from '../Icon/Icon.component';

import styles from './Button.module.scss';

const Button = ({ onClick: handleClick, type, isDisabled }) => {
  return (
    <button
      className={`button ${styles.button}`}
      type={type ? type : 'button'}
      onClick={(e) => handleClick(e)}
      disabled={isDisabled}
    >
      Say Hello
      <Icon />
    </button>
  );
};

export default Button;
