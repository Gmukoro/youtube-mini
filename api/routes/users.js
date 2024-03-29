import express from "express";

import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unSubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, update);

router.delete("/:id", verifyToken, deleteUser);

router.get("/find/:id", getUser);

router.put("/sub/:id", verifyToken, subscribe);

router.put("/unsub/:id", verifyToken, unSubscribe);

router.put("/like/:videoId", verifyToken, like);

router.put("/disLike/:id", verifyToken, dislike);

export default router;
