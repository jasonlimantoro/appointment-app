import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { Master } from '../../components/layouts';
import { Button, Typography } from '../../components';

const Feedback = ({ message }) => {
  return (
    <Master
      layoutProps={{ headerProps: { title: 'Company Name' } }}
      title="Success"
    >
      <Typography component="h3">{message}</Typography>
      <div className="w-1/2">
        <picture className="bg-gray-200 h-photoFeedback w-inherit rounded shadow-lg mb-6" />
        <Button variant="primary" component={Link} to="/" fullWidth>
          Back to Home
        </Button>
      </div>
    </Master>
  );
};

Feedback.propTypes = {
  message: PropTypes.string,
};

Feedback.defaultProps = {};

export default Feedback;
