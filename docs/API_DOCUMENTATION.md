# API Documentation

## Base URL

The API base URL for development is: `http://localhost:4000/api`

## Authentication

Currently, the API endpoints are open and do not require authentication.

## Endpoints

### Items

#### Get All Items

```http
GET /items
```

**Response**
```json
{
  "items": [
    {
      "id": "integer",
      "name": "string",
      "description": "string",
      "quantity": "integer",
      "price": "decimal",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  ]
}
```

#### Get Single Item

```http
GET /items/:id
```

**Parameters**
- `id`: Item ID (integer)

**Response**
```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "quantity": "integer",
  "price": "decimal",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Create Item

```http
POST /items
```

**Request Body**
```json
{
  "name": "string",
  "description": "string",
  "quantity": "integer",
  "price": "decimal"
}
```

**Response**
```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "quantity": "integer",
  "price": "decimal",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Update Item

```http
PUT /items/:id
```

**Parameters**
- `id`: Item ID (integer)

**Request Body**
```json
{
  "name": "string",
  "description": "string",
  "quantity": "integer",
  "price": "decimal"
}
```

**Response**
```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "quantity": "integer",
  "price": "decimal",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Delete Item

```http
DELETE /items/:id
```

**Parameters**
- `id`: Item ID (integer)

**Response**
```json
{
  "message": "Item deleted successfully"
}
```

## Error Responses

The API uses conventional HTTP response codes to indicate the success or failure of an API request:

- `200 OK`: Request succeeded
- `201 Created`: Resource was successfully created
- `400 Bad Request`: Invalid request format or parameters
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

**Error Response Format**
```json
{
  "error": "Error message description"
}
```

## Data Models

### Item

| Field       | Type    | Description                |
|-------------|---------|----------------------------|
| id          | Integer | Unique identifier          |
| name        | String  | Item name                  |
| description | String  | Item description           |
| quantity    | Integer | Available quantity         |
| price       | Decimal | Item price                 |
| createdAt   | Date    | Creation timestamp         |
| updatedAt   | Date    | Last update timestamp      |