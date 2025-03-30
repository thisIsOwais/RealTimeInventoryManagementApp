# Database Documentation

## Overview

The Inventory Management System uses PostgreSQL as its primary database, managed through Sequelize ORM. This document outlines the database configuration, schema, and relationships.

## Configuration

### Connection Settings

Database connection is configured in `nodeJsBackend/config/database.js` using environment variables:

```javascript
DB_HOST=localhost      # Database host
DB_PORT=5432          # Database port
DB_USER=your_user     # Database username
DB_PASSWORD=your_pass # Database password
DB_NAME=inventory_db  # Database name
```

## Database Schema

### Items Table

The `items` table stores inventory item information:

```sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quantity INTEGER NOT NULL DEFAULT 0,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### Columns

| Column      | Type          | Constraints | Description                |
|-------------|---------------|-------------|----------------------------|
| id          | SERIAL        | PK          | Auto-incrementing ID       |
| name        | VARCHAR(255)  | NOT NULL    | Item name                  |
| description | TEXT          |             | Item description           |
| quantity    | INTEGER       | NOT NULL    | Available quantity         |
| price       | DECIMAL(10,2) | NOT NULL    | Item price                 |
| created_at  | TIMESTAMP     |             | Record creation timestamp  |
| updated_at  | TIMESTAMP     |             | Record update timestamp    |

## Sequelize Model

The database schema is implemented using Sequelize models in `nodeJsBackend/models/Item.js`:

```javascript
const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
});
```

## Database Migrations

The database schema is automatically created and updated through Sequelize's `sync()` function when the application starts. In a production environment, it's recommended to use Sequelize migrations for schema changes.

## Indexing

The following indexes are automatically created:
- Primary Key index on `id`

Additional indexes can be added based on query patterns and performance requirements.

## Backup and Recovery

Regular database backups should be configured using PostgreSQL's built-in backup tools:

```bash
# Create a backup
pg_dump -U your_user inventory_db > backup.sql

# Restore from backup
psql -U your_user inventory_db < backup.sql
```

## Best Practices

1. **Connection Pool**: The application uses Sequelize's built-in connection pool to manage database connections efficiently.

2. **Transactions**: Use transactions for operations that require multiple database updates to maintain data consistency.

3. **Error Handling**: Implement proper error handling for database operations and connection issues.

4. **Validation**: Implement data validation at both application and database levels.

5. **Security**: Follow security best practices:
   - Use environment variables for sensitive configuration
   - Implement proper access controls
   - Regularly update database and dependencies
   - Use prepared statements (handled by Sequelize)
   - Implement proper input validation