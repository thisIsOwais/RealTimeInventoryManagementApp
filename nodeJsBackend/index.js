require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Database connection and server start
sequelize.sync()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });