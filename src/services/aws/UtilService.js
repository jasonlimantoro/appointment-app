class AmazonUtilService {
  getSession = response => response.signInUserSession;

  getJWT = response => this.getSession(response).idToken.jwtToken;
}

export default AmazonUtilService;
