import { MockList, mockServer } from 'graphql-tools';
import casual from 'casual-browserify';

import schema from '../../amplify/backend/api/appointment/build/schema.graphql';

const preserveResolvers = false;
const mocks = {
  Guest: () => ({
    firstName: casual.first_name,
    lastName: casual.last_name,
    email: casual.email,
    company: casual.company_name,
  }),
  ModelGuestConnection: () => ({
    items: () => new MockList([50, 100]),
  }),
};

const server = mockServer(schema, mocks, preserveResolvers);

export default server;

// this is an example of  how to use the mocked server
// const query = `
// query getGuestInfo {
//   getGuest(id: 6) { id, firstName, lastName, email }
// }
// `;
// const mutation = `
// mutation createGuestMutation {
//   createGuest(input: { firstName: "", lastName: "", email: "", company: "", NIK: "" }){
//     id,
//     firstName,
//   }
// }
// `;
// server.query(createBlog).then(result => console.log('got result', result));
