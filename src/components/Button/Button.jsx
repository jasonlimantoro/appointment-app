import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, ripple, className, fullWidth, ...rest }) => {
  return (
    <button
      className={classNames(
        className,
        'rounded-lg',
        'p-4',
        'bg-blue',
        'text-white',
        'focus:outline-none',
        'hover:bg-blue-dark',
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
};

export default Button;
