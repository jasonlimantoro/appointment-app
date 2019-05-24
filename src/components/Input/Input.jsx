import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
  label,
  id,
  required,
  error,
  fullWidth,
  className,
  labelClassName,
  inputClassName,
  inputProps,
  ...rest
}) => {
  const finalInputProps = {
    ...inputProps,
    required,
  };
  return (
    <div
      className={classNames(className, 'mb-4', { 'w-full': fullWidth })}
      {...rest}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label
        htmlFor={id}
        className={classNames(labelClassName, 'font-semibold', 'block', 'mb-1')}
      >
        {label}
        {required && '*'}
      </label>
      <input
        id={id}
        className={classNames(
          inputClassName,
          'border',
          'border-blue',
          'focus:outline-none',
          'p-3',
          'rounded-sm',
          {
            'w-full': fullWidth,
          },
        )}
        {...finalInputProps}
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
  error: PropTypes.string,
  /**
   * For outer div
   */
  className: PropTypes.string,
  /**
   * For label element
   */
  labelClassName: PropTypes.string,

  /**
   * For the input itself
   */
  inputClassName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
};

Input.defaultProps = {
  required: true,
  fullWidth: false,
};

export default Input;
