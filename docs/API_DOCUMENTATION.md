# API Documentation

## Database Schema

### Item Model

The inventory system uses a PostgreSQL database with Sequelize ORM. Here's the schema for the `Item` model:

| Field       | Type           | Description                               |
|------------|----------------|-------------------------------------------|
| id         | INTEGER        | Primary key, auto-incrementing            |
| name       | STRING         | Name of the item (required)               |
| category   | STRING         | Category of the item (required)           |
| description| TEXT           | Optional description of the item          |
| price      | DECIMAL(10, 2) | Price of the item (required)             |
| is_available| BOOLEAN       | Availability status (defaults to true)    |
| createdAt  | DATE           | Timestamp of creation                     |
| updatedAt  | DATE           | Timestamp of last update                  |

## API Endpoints

### Items API

Base URL: `http://localhost:<PORT>/api/items`

#### GET /api/items
Retrieve all items with optional filtering.

**Query Parameters:**
- `search` (optional): Filter items by name (case-insensitive)
- `category` (optional): Filter items by category

**Response:**
```json
[
  {
    "id": 1,
    "name": "Example Item",
    "category": "Electronics",
    "description": "Item description",
    "price": 99.99,
    "is_available": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### GET /api/items/:id
Retrieve a single item by ID.

**Parameters:**
- `id`: Item ID

**Response:**
```json
{
  "id": 1,
  "name": "Example Item",
  "category": "Electronics",
  "description": "Item description",
  "price": 99.99,
  "is_available": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### POST /api/items
Create a new item.

**Request Body:**
```json
{
  "name": "New Item",
  "category": "Electronics",
  "description": "Item description",
  "price": 99.99,
  "is_available": true
}
```

**Response:** Returns the created item object with status code 201.

#### PUT /api/items/:id
Update an existing item.

**Parameters:**
- `id`: Item ID

**Request Body:** Same as POST request

**Response:** Returns the updated item object.

#### DELETE /api/items/:id
Delete an item.

**Parameters:**
- `id`: Item ID

**Response:** Status code 204 on success.

## Error Handling

The API uses standard HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error responses include a JSON object with an error message:
```json
{
  "error": "Error message description"
}
```

## Data Sorting

Items are sorted by:
1. Category (ascending)
2. Name (ascending)

This ensures consistent ordering in the inventory list view.