import axios from "axios";

class TaskService {
  constructor () {
    this.baseUrl = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';
    this.developer = 'Benstein';
  }

  async getByPage(page, sortField, sortDirectioin) {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          developer: this.developer,
          page,
          sort_field: sortField,
          sort_direction: sortDirectioin
        }
      });

      return {
        tasks: response.data.message.tasks,
        totalCount: response.data.message.total_task_count
      };
    } catch (e) {
      console.log(e);
    }
  }

  async createTask({ username, email, text }) {    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('text', text);

    try {
      const response = await axios({
        method: 'post',
        url: `${this.baseUrl}create`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
        params: {
          developer: this.developer
        }
      });

      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new TaskService();