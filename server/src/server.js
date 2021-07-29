const express = require("express");
const cors = require("cors");

const todoRouter = require("./routes/todo");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", todoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
