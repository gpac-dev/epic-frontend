import axios from 'axios';

const USER_API_BASE_URL = 'http://172.16.38.47:3333';

class AuthService {
  signin(credentials){
    return axios.post(`${USER_API_BASE_URL}/signin`, credentials);
  }

  getTokenUser(){
    return localStorage.getItem("token");
  }

  getRefreshTokenUser(){
    return localStorage.getItem("refreshToken");
  }

  getTwoFactorAuthentication(){
    return localStorage.getItem("twoFactorAuthentication");
  }

  getUserInfo(){
    return JSON.parse(localStorage.getItem("user"));
  }

  getAuthHeader() {
    return { headers: { Authorization: 'Bearer ' + this.getUserInfo().token } };
  }

  logout() {
    localStorage.clear();
  }
}

export default new AuthService();