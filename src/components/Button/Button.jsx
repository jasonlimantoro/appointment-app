import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BUTTON_VARIANTS = {
  default: 'default',
  primary: 'primary',
};

const VARIANTS_STYLES = {
  default: ['border-gray', 'text-black', 'bg-gray-light', 'hover:bg-gray'],
  primary: ['border-blue-dark', 'text-white', 'bg-blue', 'hover:bg-blue-dark'],
};

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
        [VARIANTS_STYLES[variant].join(' ')],
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
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
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
  variant: 'default',
};

export default Button;
