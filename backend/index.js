import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8000;
dotenv.config();
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
  })
);

app.get("/", (req, res) => {
  res.send("hey it is working");
});
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
