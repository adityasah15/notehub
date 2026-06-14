# NoteHub

A full-stack note management application built using the MERN stack.

## Features

* User registration and login
* JWT authentication and protected routes
* Create notes
* View notes
* Edit notes
* Delete notes
* Search notes
* Persistent login sessions
* Responsive user interface

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt

## Project Structure

```text
backend/
├── middleware/
├── models/
├── routes/
└── server.js

frontend/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
└── public/
```

## Installation

### Backend

```bash
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the backend:

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

## Author

Aditya Sah
