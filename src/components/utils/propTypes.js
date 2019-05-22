import PropTypes from 'prop-types';
import VARIANTS from './variants';

export const variantPropTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
};
