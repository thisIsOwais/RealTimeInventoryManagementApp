import axios from 'axios';
import { API_BASE_URL } from '../config/api';

export const itemService = {
  // Get all items with optional filtering
  getAllItems: async (filters = {}) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/items`, { params: filters });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get single item by ID
  getItemById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/items/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Create new item
  createItem: async (itemData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/items`, itemData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update item
  updateItem: async (id, itemData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/items/${id}`, itemData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete item
  deleteItem: async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/items/${id}`);
      return true;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

// export default itemService;