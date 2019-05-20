import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
  type,
  label,
  id,
  required,
  error,
  fullWidth,
  labelClassName,
  inputClassName,
  ...rest
}) => {
  return (
    <div className="m-2">
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label
        htmlFor={id}
        className={classNames(
          labelClassName,
          'font-semibold',
          'text-xs',
          'block',
          'mb-1',
        )}
      >
        {label}
        {required && '*'}
      </label>
      <input
        id={id}
        className={classNames(
          inputClassName,
          'border',
          'text-sm',
          'border-blue',
          'focus:outline-none',
          'p-3',
          'rounded-sm',
          {
            'w-full': fullWidth,
          },
        )}
        type={type}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error}!</p>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'checkbox', 'radio']),
  error: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  required: true,
  fullWidth: false,
};

export default Input;
