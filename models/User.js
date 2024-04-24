// user.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    foods: [
      {
        title: String,
        img: String,
        name: String,
        portion: String,
        calories: Number,
        carbs: Number,
        protein: Number
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
