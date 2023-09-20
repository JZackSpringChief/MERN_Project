import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

//routes
import newVidgameRouter from "./routes/newVg.js";

const app = express();
dotenv.config();
app.use(express.json({ extended: false }));
//

app.get("/", (req, res) => {
  //   console.log(req);
  return res.status(234).send("MERN stack test v1.2");
});

app.use("/videogame", newVidgameRouter);

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
