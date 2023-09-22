import express from "express";
import { vG } from "../models/videoGameModel.js";
const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await vG.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Video game not found" });
    }
    return res.status(200).send({ message: "Video game was deleted :(" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
