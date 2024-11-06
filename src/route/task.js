import express from "express";

import {
  // GET_RESPONSE,
  // GET_HEAD_OR_TAILS,
  // GENERATE_ID,
  INSERT_TASK,
  GET_ALL_TASKS,
  GET_TASK_BY_ID,
  DELETE_TASK_BY_ID,
} from "../controller/task.js";

const router = express.Router();

// router.get("/getResponse", GET_RESPONSE);

// router.get("/getHeadsOrTails", GET_HEAD_OR_TAILS);

// router.get("/generateId", GENERATE_ID);

router.post("/tasks", INSERT_TASK);
router.get("/tasks", GET_ALL_TASKS);
router.get("/tasks/:id", GET_TASK_BY_ID);
router.delete("/tasks/:id", DELETE_TASK_BY_ID);

export default router;
