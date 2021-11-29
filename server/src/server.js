const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth");
const todoRouter = require("./routes/todo");
const userRouter = require("./routes/user");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", authRouter);
app.use("/todos", todoRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
