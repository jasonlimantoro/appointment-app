import BaseService from './BaseService';
import GraphQLMockedServer from '../graphql/mock';
import { getNestedObjectValue } from '../components/utils/helpers';

const createGuest = ({ firstName, lastName, email, company, NIK }) => `
mutation createGuestMutation {
  createGuest(input: { firstName: ${firstName}, lastName: ${lastName}, email: ${email}, company: ${company}, NIK: ${NIK} }){
    id,
    firstName,
  }
}
`;
const getGuest = `
query getGuestQuery {
  getGuest(id: 3){
    id,
    firstName,
    lastName,
    email,
  }
}
`;
const listGuest = `
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
  create = async (
    { firstName, lastName, email, NIK, company },
    gqlQuery = createGuest,
  ) => {
    const res = await GraphQLMockedServer.query(
      gqlQuery({ firstName, lastName, email, NIK, company }),
    );
    return res;
  };

  get = async (gqlQuery = getGuest) => {
    const res = await GraphQLMockedServer.query(gqlQuery);
    return res;
  };

  list = async (gqlQuery = listGuest) => {
    const res = await GraphQLMockedServer.query(gqlQuery);
    return getNestedObjectValue(res, [])(['data', 'listGuests', 'items']);
  };
}
