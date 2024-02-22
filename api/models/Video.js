import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoTitle: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    videoURL: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    tag: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timeStamps: true }
);

export default mongoose.models("Video", VideoSchema);
