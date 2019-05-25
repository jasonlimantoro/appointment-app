import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

const Header = ({ title }) => {
  return (
    <div className="w-full bg-blue-dark flex justify-center items-center text-white min-h-header h3 my-0">
      <div>{title}</div>
      <div className="absolute right-0 h-header flex items-center">
        <Button variant="transparentLight" className="text-sm">
          Logout
        </Button>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {};

export default Header;
