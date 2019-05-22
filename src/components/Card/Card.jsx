import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CARD_VARIANTS = {
  default: 'default',
  primary: 'primary',
};

const VARIANT_STYLES = {
  default: ['border-gray', 'text-black', 'bg-gray-light', 'hover:bg-gray'],
  primary: ['border-blue-dark', 'text-white', 'bg-blue', 'hover:bg-blue-dark'],
};

const Card = ({ fullWidth, className, variant, component, ...rest }) => {
  const Component = component;
  return (
    <Component
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
      {...rest}
    />
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  component: PropTypes.elementType,
  variant: PropTypes.oneOf(Object.values(CARD_VARIANTS)),
};

Card.defaultProps = {
  fullWidth: false,
  variant: CARD_VARIANTS.default,
  component: 'div',
};

export default Card;
