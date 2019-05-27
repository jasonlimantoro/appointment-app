import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Debug from './Debug';

const query = `
query {
  listBlogs {
    items {
      id
      name
    }
  }
}`;

const Scratch = () => {
  return (
    <Query query={gql(query)}>{({ data }) => <Debug json={data} />}</Query>
  );
};

Scratch.propTypes = {};

Scratch.defaultProps = {};

export default Scratch;
