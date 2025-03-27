import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

// Ensure the database connects before starting the server
connectDB()
  .then(() => {
    const app = express();

    // Middleware
    app.use(express.json()); // Parse incoming JSON
    app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // Enable CORS for frontend (React on port 3000)
    app.use(cookieParser()); // Parse cookies

    // Session configuration
    app.use(
      session({
        secret: process.env.SESSION_SECRET || "your-secret-key", // Replace with an actual secret key
        resave: false,
        saveUninitialized: true,
        cookie: { httpOnly: true, secure: process.env.NODE_ENV === "production" }, // Secure cookies only in production
      })
    );

    // Routes
    app.use("/api/auth", authRoutes); // User authentication routes (login, register, etc.)
    app.use("/api/rooms", roomRoutes); // Room management routes
    app.use("/api/payment", paymentRoutes);
    // Health Check Route
    app.get("/", (req, res) => {
      res.send("🏨 Hotel Management API is running...");
    });

    // Start Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit process if DB connection fails
  });
