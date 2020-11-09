import Cookies from 'js-cookie';
import decode from 'jwt-decode';

type DecodedToken = {
  roles: string[];
  iat: number;
  exp: number;
  sub: string;
};

class Auth {
  private expiresAt: number = -1;

  private getToken() {
    const token = Cookies.get('token');
    return token ? String(token) : undefined;
  }

  // TODO: rename to login?
  handleAuthentication() {
    const token = this.getToken();

    if (token !== undefined) {
      const decodedToken = decode(token) as DecodedToken;
      this.expiresAt = new Date(decodedToken.exp * 1000).getTime();
    }
  }

  // TODO: rename to logout?
  clear() {
    this.expiresAt = -1;
  }

  isAuthenticated() {
    const currentTime = new Date().getTime();
    return this.expiresAt > currentTime;
  }
}

export default new Auth();
