import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { fetchGuests } from '../../actions/guests.action';
import { selectors } from '../../reducers/rootReducer';
import { GuestService } from '../../services/aws/api';

const service = new GuestService({});

const SignedInGuest = ({ fetchGuests, data }) => {
  useEffect(() => {
    fetchGuests(service);
  }, []);
  return (
    <div>
      <h1>Sign in guests</h1>
      <ul className="list-reset">
        {data.map(d => (
          <li key={d.id}>
            {d.firstName} {d.lastName} ({d.email}) from {d.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

SignedInGuest.propTypes = {
  // redux actions
  fetchGuests: PropTypes.func.isRequired,
  // redux state
  data: PropTypes.arrayOf(PropTypes.object),
};

SignedInGuest.defaultProps = {};

export default compose(
  connect(
    state => {
      return {
        data: selectors.guests.selectData(state),
      };
    },
    { fetchGuests },
  ),
)(SignedInGuest);
