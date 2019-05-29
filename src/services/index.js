import UserService from './UserService';
import AuthService from './aws/auth/AuthService';
import GuestService from './GuestService';
import AWSGuestService from './aws/api/guest/GuestService';

export default {
  Auth: {
    development: UserService,
    staging: AuthService,
    production: AuthService,
  },
  Guest: {
    development: GuestService,
    staging: AWSGuestService,
    production: AWSGuestService,
  },
};
