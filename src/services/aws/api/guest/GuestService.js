import { API } from 'aws-amplify';

import BaseService from '../../../BaseService';
import { listGuests } from '../../../../graphql/queries';
import { getNestedObjectValue } from '../../../../components/utils/helpers';

export default class GuestService extends BaseService {
  list = async (gqlQuery = listGuests, { variables } = {}) => {
    const res = await API.graphql({
      query: gqlQuery,
      variables,
    });
    return getNestedObjectValue(res, [])(['data', 'listGuests', 'items']);
  };
}
