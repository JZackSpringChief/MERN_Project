import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//routes
import newVidgameRouter from "./routes/newVg.js";
import singleVidGRouter from "./routes/singleVg.js";
import deleteVidGRouter from "./routes/deleteVg.js";

const app = express();
dotenv.config();
app.use(express.json({ extended: false }));

//middle ware?

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-type"],
//   })
// );

app.get("/", (req, res) => {
  //   console.log(req);
  return res.status(234).send("MERN stack test v1.2");
});

app.use("/videogame", newVidgameRouter, singleVidGRouter, deleteVidGRouter);
// app.use("/videogame", singleVidGRouter);
// app.use("/videogame", deleteVidGRouter);

mongoose
  .connect(process.env.mongo_DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("APP is connected to database");
    app.listen(PORT, () => {
      console.log(`APP is hearing you on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
