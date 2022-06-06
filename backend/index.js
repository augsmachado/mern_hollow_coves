import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import status from "./routes/status.routes.js";

// Initialize dotenv
dotenv.config();

// Define app conection and body parser
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Application routes
app.use("/status", status);

app.use("*", (req, res) => {
	res.status(400).json({ error: "Not route found" });
});

app.listen(PORT, () => {
	console.log(`Server running in port: ${PORT}`);
});

export default app;
