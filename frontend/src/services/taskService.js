import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const taskService = {
  // Get all tasks
  getAllTasks: async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  // Get single task
  getTaskById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching task:', error);
      throw error;
    }
  },

  // Create new task
  createTask: async (taskData) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, taskData);
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  },

  // Update task
  updateTask: async (id, taskData) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${id}`, taskData);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  // Delete task
  deleteTask: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },
};

export default taskService;
