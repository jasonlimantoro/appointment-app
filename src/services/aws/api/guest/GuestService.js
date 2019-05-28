import gql from 'graphql-tag';

import BaseService from '../../../BaseService';
import { client } from '../../../../config';
import { getNestedObjectValue } from '../../../../components/utils/helpers';

const listGuest = gql`
  query getListGuest {
    listGuests {
      items {
        id
        firstName
        lastName
        email
        NIK
        company
      }
    }
  }
`;

export default class GuestService extends BaseService {
  list = async (gqlQuery = listGuest) => {
    const res = await client.query({ query: gqlQuery });
    return getNestedObjectValue(res, [])(['data', 'listGuests', 'items']);
  };
}
