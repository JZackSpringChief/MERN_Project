import express from "express";
import { vG } from "../models/videoGameModel.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const videogame = await vG.findById(id);

    return res.status(200).json(videogame);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.developer || !req.body.yearPublished) {
      return res.status(400).send({
        message: "Send all required fields: title, developer. yearPublished",
      });
    }
    const { id } = req.params;

    const result = await vG.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Video game not found" });
    }
    return res
      .status(200)
      .send({ message: "Video game update was successful" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
