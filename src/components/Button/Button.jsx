import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VARIANTS from '../utils/variants';
import { variantPropTypes } from '../utils/propTypes';

const Button = ({
  children,
  ripple,
  className,
  fullWidth,
  variant,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        className,
        'rounded-lg',
        'p-4',
        'focus:outline-none',
        [VARIANTS[variant]],
        {
          ripple,
          'w-full': fullWidth,
        },
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ...variantPropTypes,
  /**
   * Whether to apply ripple effect onclick
   */
  ripple: PropTypes.bool,
  /**
   * Whether to make the button fills all the available spaces in its parent
   */
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  ripple: true,
  fullWidth: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  variant: VARIANTS.default,
};

export default Button;
