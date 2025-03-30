# Full-Stack Inventory Management Application

A modern full-stack web application built with Express.js backend and React frontend (Vite), featuring inventory management capabilities with a responsive UI.

## Tech Stack

### Backend
- Node.js with Express.js
- PostgreSQL Database with Sequelize ORM
- RESTful API architecture
- CORS enabled for cross-origin requests

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- HeadlessUI and HeroIcons for UI components
- React Hot Toast for notifications

## Project Structure
```
project/
├── nodeJsBackend/           # Express.js backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Request handlers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   └── index.js           # Server entry point
└── frontend/              # React frontend
    ├── src/
    │   ├── components/    # React components
    │   ├── services/      # API services
    │   ├── config/        # Frontend configuration
    │   └── assets/        # Static assets
    ├── .env               # Frontend environment variables
    └── package.json       # Frontend dependencies
```

## Environment Setup

### Backend (.env)
```
PORT=            # Server port number
DB_HOST=         # Database host
DB_PORT=         # Database port
DB_USER=         # Database username
DB_PASSWORD=     # Database password
DB_NAME=         # Database name
```

### Frontend (.env)
```
VITE_API_BASE_URL=  # Backend API URL
```

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd nodeJsBackend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Configure your PostgreSQL database
5. Start the server:
   - Development: `npm run dev`
   - Production: `npm start`

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- Backend API runs on `http://localhost:<PORT>`
- Frontend development server runs on `http://localhost:5173`
- Hot reloading is enabled for both frontend and backend in development mode

## Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Production
```bash
cd nodeJsBackend
npm start
```

## Features

- Inventory management system
- Real-time data updates
- Responsive design for all devices
- Modern UI components with HeadlessUI
- Secure API endpoints
- Database integration with Sequelize ORM

## Notes

- The frontend uses Vite for faster development and optimized production builds
- Backend uses Nodemon in development for automatic server restarts
- CORS is configured for secure cross-origin communication
- Environment variables are used for sensitive configuration