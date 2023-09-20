import express from "express";
import { vG } from "../models/videoGameModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.developer || !req.body.yearPublished) {
      return res.status(400).send({
        message: "Send all required fields: title, developer. yearPublished",
      });
    }
    const newVideoGame = {
      title: req.body.title,
      developer: req.body.developer,
      yearPublished: req.body.yearPublished,
    };

    const videoGame = await vG.create(newVideoGame);

    return res.status(201).send(videoGame);
  } catch (error) {
    console.log(error.message);
    console.log(res.status(500).send({ message: error.message }));
  }
});

router.get("/", async (req, res) => {
  try {
    const videogames = await vG.find({});

    return res.status(200).json({
      count: videogames.length,
      data: videogames,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
