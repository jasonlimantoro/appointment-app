import AmazonService from './AuthService';
import AmazonUtilService from './AuthUtilService';

const AmazonAuthService = new AmazonService({ ServiceUtil: AmazonUtilService });

export { AmazonService, AmazonUtilService };
export default AmazonAuthService;
