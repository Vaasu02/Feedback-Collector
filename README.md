# Feedback Collector

A full-stack application for collecting and managing user feedback with a clean, modern UI and robust backend.

## Overview

Feedback Collector is a single-page application that allows users to submit feedback through a form. The application includes an admin view to browse all submitted feedback. It features a responsive design, dark/light mode, and a glassmorphism UI effect.

## Tech Stack

### Frontend
- **React** with Vite for fast development
- **Tailwind CSS** for styling
- **React Hook Form** for form validation
- **React Hot Toast** for notifications
- **Axios** for API requests
- **React Icons** for UI icons
- **Context API** for theme management

### Backend
- **Node.js** for runtime environment
- **Express.js** for server framework
- **MongoDB** for database
- **Mongoose** as ODM
- **Express Validator** for input validation
- **Cors** for cross-origin resource sharing
- **Helmet** for security headers
- **Express Rate Limit** for rate limiting

## Features

- Clean, responsive design
- Dark/light theme toggle
- Form validation with user-friendly messages
- Admin view to display all feedback entries
- Pagination for feedback list
- Glassmorphism UI effect
- API with validation
- Proper error handling
- Loading states and animations

## Project Structure

```
feedback-collector/
├── frontend/                # React Vite application
│   ├── public/
│   ├── src/
│   │   ├── components/      # UI components
│   │   │   ├── common/      # Reusable components
│   │   │   ├── feedback/    # Feedback form and list
│   │   │   └── layout/      # Layout components
│   │   ├── context/         # Context providers
│   │   ├── services/        # API services
│   │   ├── App.jsx          # Main component
│   │   └── main.jsx         # Entry point
│   ├── index.html
│   └── package.json
│
└── backend/                 # Node.js Express application
    ├── controllers/         # Request handlers
    ├── models/              # Mongoose models
    ├── routes/              # API routes
    ├── middleware/          # Custom middleware
    ├── .env                 # Environment variables
    ├── index.js             # Entry point
    └── package.json
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- MongoDB

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/feedback-collector
   NODE_ENV=development
   ```

4. Start the server:
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

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### POST /api/feedback
Create a new feedback entry.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "message": "This is a test feedback message"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "fullName": "John Doe",
    "email": "john@example.com",
    "message": "This is a test feedback message",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### GET /api/feedback
Get all feedback entries with pagination.

**Query Parameters:**
- page (default: 1)
- limit (default: 10)

**Response:**
```json
{
  "success": true,
  "count": 2,
  "total": 2,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "_id": "...",
      "fullName": "John Doe",
      "email": "john@example.com",
      "message": "This is a test feedback message",
      "createdAt": "...",
      "updatedAt": "..."
    },
    {...}
  ]
}
```

## Deployment

### Backend Deployment
1. Create a MongoDB Atlas cluster or use any MongoDB hosting service
2. Update the `.env` file with the production MongoDB URI
3. Deploy to a hosting service like Heroku, Render, or Netlify Functions:
   ```bash
   git push heroku main
   ```

### Frontend Deployment
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `dist` folder to Netlify:
   ```bash
   npx netlify-cli deploy --prod
   ```

3. Configure the API URL in production by setting the `API_URL` in `src/services/api.js` to your deployed backend URL.

## Usage

1. **Submit Feedback**:
   - Fill in your full name, email, and feedback message
   - Click "Submit Feedback"
   - Receive a success notification

2. **View Feedbacks**:
   - Click "View Submitted Feedback"
   - Browse through feedback entries
   - Use pagination to navigate between pages

3. **Toggle Theme**:
   - Click the sun/moon icon to switch between light and dark themes
