import axios from "axios";

class AuthService {
  constructor () {
    this.baseUrl = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';
    this.developer = 'Benstein';
  }

  async login(username, password) {    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await axios({
        method: 'post',
        url: `${this.baseUrl}login`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
        params: {
          developer: this.developer
        }
      });

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthService();