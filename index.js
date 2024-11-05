const express = require("express");
const cors = require("cors");
const taskRouter = require("./src/route/task");
const app = express();

app.use(cors());

app.use(express.json());

app.use(taskRouter);

app.use((req, res) => {
  res.status(404).json({ response: "your endpoint does not exit" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`App was started on port ${port}`);
});
