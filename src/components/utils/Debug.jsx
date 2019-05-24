import React from 'react';
import PropTypes from 'prop-types';

const Debug = ({ json }) => {
  return (
    <pre className="bg-gray my-10 w-full text-black overflow-scroll">
      {JSON.stringify(json, null, 2)}
    </pre>
  );
};

Debug.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  json: PropTypes.object,
};

Debug.defaultProps = {};

export default Debug;
