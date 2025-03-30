# Deployment Guide

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager
- Git for version control

## Development Environment Setup

### Backend Setup

1. Clone the repository and navigate to the backend directory:
```bash
cd nodeJsBackend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
- Copy `.env.example` to `.env`
- Update the following variables:
  ```env
  PORT=3000              # API server port
  DB_HOST=localhost      # Database host
  DB_PORT=5432          # Database port
  DB_USER=your_user     # Database username
  DB_PASSWORD=your_pass # Database password
  DB_NAME=inventory_db  # Database name
  ```

4. Initialize the database:
- Create a PostgreSQL database
- The tables will be automatically created by Sequelize

5. Start the development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
- Copy `.env.example` to `.env`
- Update the API URL:
  ```env
  VITE_API_BASE_URL=http://localhost:3000
  ```

4. Start the development server:
```bash
npm run dev
```

## Production Deployment

### Backend Deployment

1. Set production environment variables:
```env
NODE_ENV=production
PORT=3000
DB_HOST=your_production_db_host
DB_PORT=5432
DB_USER=your_production_user
DB_PASSWORD=your_production_password
DB_NAME=your_production_db
```

2. Build and start the server:
```bash
npm install --production
npm start
```

### Frontend Deployment

1. Set production environment variables:
```env
VITE_API_BASE_URL=https://your-api-domain.com
```

2. Build the frontend:
```bash
npm run build
```

3. Serve the built files:
- The built files will be in the `dist` directory
- Serve using a static file server (nginx, Apache, etc.)

## Database Management

### Backup and Restore

1. Backup database:
```bash
pg_dump -U your_user -d inventory_db > backup.sql
```

2. Restore database:
```bash
psql -U your_user -d inventory_db < backup.sql
```

## Monitoring and Maintenance

### Backend Monitoring

1. Monitor server logs:
```bash
tail -f server.log
```

2. Check server status:
```bash
ps aux | grep node
```

### Database Monitoring

1. Monitor PostgreSQL logs:
```bash
tail -f postgresql.log
```

2. Check database connections:
```sql
SELECT * FROM pg_stat_activity;
```

## Security Considerations

1. Enable HTTPS in production
2. Implement rate limiting
3. Use secure database connections
4. Regularly update dependencies
5. Implement proper authentication
6. Use environment variables for secrets
7. Regular security audits

## Troubleshooting

### Common Issues

1. Database Connection Issues
- Check database credentials
- Verify database service is running
- Check network connectivity

2. Frontend Build Issues
- Clear npm cache
- Delete node_modules and reinstall
- Check for conflicting dependencies

3. API Connection Issues
- Verify API URL configuration
- Check CORS settings
- Verify network connectivity

### Performance Optimization

1. Backend Optimization
- Enable compression
- Implement caching
- Optimize database queries

2. Frontend Optimization
- Enable code splitting
- Implement lazy loading
- Optimize asset delivery

## Scaling Guidelines

1. Horizontal Scaling
- Use load balancer
- Implement session management
- Configure database replication

2. Vertical Scaling
- Increase server resources
- Optimize database configuration
- Monitor resource usage

## Backup Strategy

1. Database Backups
- Daily automated backups
- Regular backup testing
- Secure backup storage

2. Application Backups
- Source code version control
- Configuration backup
- Document all custom changes