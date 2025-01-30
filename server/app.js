import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { updateRole } from "./src/controllers/authController.js";
import { getUser } from "./src/controllers/userController.js";

export const app = express();
config();

app.use(express.json());

app.post("/test", (req, res) => {
  res.status(200).json({ message: "Backend is working!" });
});

// Existing route
app.put("/update-role", updateRole); // Use PUT for updating resources

// New route for fetching user data
app.get("/get-user/:uid", getUser);

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods:["GET","POST","PUT","DELETE"],
  credentials: true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
