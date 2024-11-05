const { v4: uuidv4 } = require("uuid");

const tasks = [];

module.exports.GET_RESPONSE = (req, res) => {
  res.status(200).json({ response: "heyooooo" });
};

module.exports.GET_HEAD_OR_TAILS = (req, res) => {
  const response = Math.random() > 0.5 ? "Heads" : "Tails";
  res.status(200).json({ response: response });
};

module.exports.GENERATE_ID = (req, res) => {
  return res.status(200).json({ id: uuidv4() });
};

module.exports.INSERT_TASK = (req, res) => {
  const task = {
    id: uuidv4(),
    title: req.body.title,
    points: req.body.points,
    status: false,
    date: new Date(),
  };

  const isTitleExists = tasks.some((task) => task.title === req.body.title);

  if (isTitleExists) {
    return res.status(409).json({ message: "this task already exist" });
  }

  tasks.push(task);

  return res
    .status(201)
    .json({ response: "task was inserted successfully", task: task });
};

module.exports.GET_ALL_TASKS = (req, res) => {
  if (tasks.length > 0) {
    const sortedTasks = [...tasks].sort((a, b) => b.points - a.points);

    return res.status(200).json({ tasks: sortedTasks });
  }
  return res.status(200).json({ message: "tasks not exist" });
};

module.exports.GET_TASK_BY_ID = (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);

  if (!task) {
    return res.status(404).json({ message: "tasks not exist" });
  }

  return res.status(200).json({ task: task });
};
