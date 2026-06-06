import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';
import path from 'path';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())

app.use("/api/users", authRoutes)
app.use("/api/notes", notesRoutes)

// --- UPDATED PRODUCTION BLOCK ---
if (process.env.NODE_ENV === "production") {
  // 1. Step out of 'backend' using '../' to find 'frontend/dist'
  app.use(express.static(path.join(import.meta.dirname, "../frontend/dist")));

  // 2. Catch all routes and serve index.html using import.meta.dirname
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(import.meta.dirname, "../frontend", "dist", "index.html"));
  });
}
// ---------------------------------

await connectDB();

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});