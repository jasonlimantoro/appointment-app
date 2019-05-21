import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div className="w-full bg-blue-dark flex justify-center items-center text-white min-h-header h3 my-0">
      {title}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {};

export default Header;
