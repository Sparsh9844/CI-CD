import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.get("/quote", (req: Request, res: Response) => {
  const quotes = [
    "The best way out is always through.",
    "Great things are done by a series of small things brought together.",
    "It always seems impossible until it's done.",
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return res.json({ quote });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
