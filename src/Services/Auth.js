import axios from 'axios';

const USER_API_BASE_URL = 'http://172.16.38.8:3333';

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

  getUserInfo(){
    return JSON.parse(localStorage.getItem("user"));
  }

  getAuthorizationHeader() {
    return { headers: { Authorization: 'Bearer ' + this.getUserInfo().token } };
  }

  logout() {
    localStorage.clear();
    return axios.post(`${USER_API_BASE_URL}/logout`);
  }
}

export default new AuthService();