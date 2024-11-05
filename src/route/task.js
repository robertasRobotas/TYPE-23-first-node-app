const express = require("express");

const {
  GET_RESPONSE,
  GET_HEAD_OR_TAILS,
  GENERATE_ID,
  INSERT_TASK,
  GET_ALL_TASKS,
  GET_TASK_BY_ID,
} = require("../controller/task");

const router = express.Router();

router.get("/getResponse", GET_RESPONSE);

router.get("/getHeadsOrTails", GET_HEAD_OR_TAILS);

router.get("/generateId", GENERATE_ID);

router.post("/insertTask", INSERT_TASK);

router.get("/getAllTasks", GET_ALL_TASKS);

router.get("/getTaskById/:id", GET_TASK_BY_ID);

module.exports = router;
