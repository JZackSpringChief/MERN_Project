import mongoose from "mongoose";

const vgShema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    developer: {
      type: String,
      required: true,
    },
    yearPublished: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const vG = mongoose.model("videa game", vgShema);
