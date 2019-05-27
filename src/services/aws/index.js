import AmazonUtilService from './UtilService';
import AmazonService from './AmazonService';

export { AmazonService, AmazonUtilService };
const AmazonAuthService = new AmazonService({ ServiceUtil: AmazonUtilService });
export default AmazonAuthService;
