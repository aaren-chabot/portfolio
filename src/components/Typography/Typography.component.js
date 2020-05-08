import React from 'react';
import classnames from 'clsx';

import styles from './Typography.module.scss';

const Typography = ({
  element,
  children,
  weight,
  className,
  pSize,
  align,
  warning,
  ...props
}) =>
  React.createElement(
    element,
    {
      ...props,
      className: classnames(
        styles.typography,
        styles[`weight_${weight}`],
        className,
        weight,
        element === 'p' && styles[`para-${pSize}`],
        styles[`align_${align}`],
        styles[`warning_${warning}`]
      )
    },
    children
  );

Typography.defaultProps = {
  children: '',
  className: '',
  element: 'p',
  weight: '',
  align: '',
  pSize: '',
  warning: ''
};

export default Typography;
