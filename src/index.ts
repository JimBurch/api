import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const PORT = process.env.NODE_API_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send("Pong!");
});

app.get("/health", async (req: Request, res: Response): Promise<Response> => {
  return res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Jim's API is partyin' on ${PORT}`);
});
