const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Get all items (with optional filtering)
router.get('/', itemController.getAllItems);

// Get single item by ID
router.get('/:id', itemController.getItemById);

// Create new item
router.post('/', itemController.createItem);

// Update item
router.put('/:id', itemController.updateItem);

// Delete item
router.delete('/:id', itemController.deleteItem);

module.exports = router;