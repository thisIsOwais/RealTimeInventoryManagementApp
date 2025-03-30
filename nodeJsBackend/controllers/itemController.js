const Item = require('../models/Item');
const { Op } = require('sequelize');

const itemController = {
  // Get all items with optional filtering
  getAllItems: async (req, res) => {
    try {
      const { search, category } = req.query;
      const whereClause = {};

      if (category) {
        whereClause.category = category;
      }
  
      // ✅ Only filter by name if search is NOT empty
      if (search && search.trim() !== "") {
        whereClause.name = { [Op.iLike]: `%${search}%` };
      }
  
      const items = await Item.findAll({
        where: whereClause,
        order: [["category", "ASC"], ["name", "ASC"]],
      });
  

      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get single item by ID
  getItemById: async (req, res) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create new item
  createItem: async (req, res) => {
    try {
      const item = await Item.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update item
  updateItem: async (req, res) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      await item.update(req.body);
      res.json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete item
  deleteItem: async (req, res) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      await item.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = itemController;