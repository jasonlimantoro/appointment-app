import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VARIANTS from '../utils/variants';
import { variantPropTypes } from '../utils/propTypes';

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
        [VARIANTS[variant]],
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
  ...variantPropTypes,
};

Card.defaultProps = {
  fullWidth: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  variant: VARIANTS.default,
  component: 'div',
};

export default Card;
