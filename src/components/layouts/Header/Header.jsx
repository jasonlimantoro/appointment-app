import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import AuthService from '../../../services/aws/auth';
import Button from '../../Button/Button';
import { logoutUser } from '../../../actions/users.action';

const Header = ({ title, logoutUser }) => {
  return (
    <div className="w-full bg-blue-dark flex justify-center items-center text-white min-h-header h3 my-0">
      <div>{title}</div>
      <div className="absolute right-0 h-header flex items-center">
        <Button
          variant="transparentLight"
          className="text-sm"
          onClick={() => logoutUser(AuthService)}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  // Redux actions
  logoutUser: PropTypes.func.isRequired,
};

Header.defaultProps = {};

export default compose(
  connect(
    undefined,
    { logoutUser },
  ),
)(Header);
