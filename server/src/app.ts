import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db";
import experienceRoutes from "./routes/experienceRoutes";

dotenv.config({});

connectDB();

const app: Express = express();

app.use(express.json());

// logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req: Request, res: Response) => {
  res.send("Yeahhhhhhhh");
});

// routes
app.use("/api/experience", experienceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server runing in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
