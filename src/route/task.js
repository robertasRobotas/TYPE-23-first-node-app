import express from "express";

import {
  INSERT_TASK,
  GET_ALL_TASKS,
  GET_TASK_BY_ID,
  UPDATE_TASK_BY_ID,
  DELETE_TASK_BY_ID,
} from "../controller/task.js";

const router = express.Router();

router.post("/tasks", INSERT_TASK);
router.get("/tasks", GET_ALL_TASKS);
router.get("/tasks/:id", GET_TASK_BY_ID);
router.put("/tasks/:id", UPDATE_TASK_BY_ID);
router.delete("/tasks/:id", DELETE_TASK_BY_ID);

export default router;
