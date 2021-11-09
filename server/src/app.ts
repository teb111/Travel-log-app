import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config({});

const app: Express = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Yeahhhhhhhh");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server runing in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
