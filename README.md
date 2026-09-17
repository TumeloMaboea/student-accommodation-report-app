# Student Accommodation Report App

A full-stack web application for students to register, sign in, and submit maintenance or accommodation-related reports for their residence. The project is split into a Node.js/Express backend and a React + Vite frontend, with Prisma and PostgreSQL for data persistence.

## Overview

This application is designed to help students report issues such as plumbing, electrical faults, furniture problems, and general accommodation concerns. It includes:

- Student authentication with login and registration
- Profile access for authenticated users
- Residence and room-related data access
- Report creation, listing, updating, and deletion
- Frontend views for authentication and form submission

## Tech Stack

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT-based authentication flow
- Cookie parsing for session/auth handling

### Frontend
- React
- TypeScript
- Vite
- React Router
- React Hook Form + Zod
- Supabase integration support

## Project Structure

```text
student-accommodation-report-app/
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── prisma.config.ts
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.ts
│   ├── .env_example
│   └── README.md
├── .gitignore
└── README.md
```

## Main Features

### Authentication
The backend exposes user routes for:

- Register new users
- Login users
- Logout users
- Fetch the authenticated user's profile

Relevant routes include:

```text
POST /api/users/register
POST /api/users/login
POST /api/users/logout
GET /api/users/profile
```

### Reports
Users can create and manage accommodation reports through the report API.

```text
POST /api/report
GET /api/report
GET /api/report/:id
PATCH /api/report/:id
DELETE /api/report/:id
```

### Residence and Rooms
The app also includes endpoints for residence and room resources:

```text
/api/residences
/api/rooms
```

### Frontend Screens
The frontend contains pages for:

- Login
- Registration
- Report submission form
- Report status tracking

## Environment Setup

### Backend
Create a `.env` file in the `backend` directory with the required database configuration:

```env
DATABASE_URL=your_postgresql_connection_string
```

The backend uses Prisma with PostgreSQL and connects through the configuration in `backend/src/config/db.js`.

### Frontend
The frontend includes an `.env_example` file. Copy it to `.env` and fill in the required values:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
SUPABASE_JWT_SECRET=your_supabase_jwt_secret
DATABASE_URL=your_database_url
DATABASE_PASSWORD=your_database_password
```

## Installation

### Backend
```bash
cd backend
npm install
npm run dev
```

The backend server runs on port `5001` by default.

### Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend is served with Vite and is typically available at the local Vite development URL printed in the terminal.

## Running the Project

To run the application locally:

1. Start the backend:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend in a separate terminal:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open the frontend URL shown by Vite in your browser.

## Database

The project uses Prisma for schema management and database access. Prisma configuration is defined in `backend/prisma.config.ts`, and the app connects to PostgreSQL using the `DATABASE_URL` environment variable.

## Notes

- The backend is implemented in JavaScript rather than TypeScript.
- The frontend is built with React and TypeScript.
- The repo includes both app logic and a Prisma migration-ready structure.
- Some frontend mock data is currently used for demo flows, such as category lists and default user profiles.

## License

This project currently lists the license as ISC in the backend package metadata.

## Contributors

This repository appears to be a student accommodation management/reporting application and is intended for project-based development and demonstration.
