import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();

//Middleware for parsing req body

app.use(express.json());
//Middleware for handling CORS policy
//Option 1 allow origins with defualt of cors
app.use(cors());
//option 2 allow custom origins
// app.use(
//   cors({
//     origins: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  //   console.log(req);
  return res.status(234).send("Welcome to MERN book store app");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app is connected to DB");

    app.listen(5555, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
