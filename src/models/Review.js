import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "Please provide a rating"],
      min: 1,
      max: 5,
    },
    desc: {
      type: String,
      required: [true, "Please provide a description"],
      min: 8,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bookId: {
      type: string,
      ref: "Book",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Review ||
  mongoose.model("Review", ReviewSchema);
