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

export default router;
