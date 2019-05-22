import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CARD_VARIANTS = {
  default: 'default',
  primary: 'primary',
};

const VARIANT_STYLES = {
  default: ['border-gray', 'text-black', 'bg-gray-light'],
  primary: ['border-blue-dark', 'text-white', 'bg-blue'],
};

const Card = ({ children, fullWidth, className, variant }) => {
  return (
    <div
      className={classNames(
        className,
        'inline-flex',
        'items-center',
        'justify-center',
        'h2',
        'p-8',
        'rounded-xl',
        'border',
        'shadow-lg',
        'cursor-pointer',
        {
          'w-full': fullWidth,
        },
        [VARIANT_STYLES[variant].join(' ')],
      )}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(CARD_VARIANTS)),
};

Card.defaultProps = {
  fullWidth: false,
  variant: CARD_VARIANTS.default,
};

export default Card;
