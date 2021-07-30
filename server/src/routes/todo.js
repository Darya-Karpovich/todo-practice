const express = require("express");
const router = express.Router();

const todos = Array(5)
  .fill(0)
  .map((_, i) => ({
    id: Date.now() + Math.floor(Math.random() * 1000),
    title: "Hello" + i,
    text: "world" + (i + 1),
  }));

router.get("/", (req, res) => {
  res.json(todos);
});

router.get("/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === +req.params.id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

router.post("/", (req, res) => {
  const { title, text } = req.body;

  if (title.trim() === "" || text.trim() === "") {
    return res.status(406).json({ error: "Invalid data" });
  }

  const todo = { title, text, id: Date.now() + Math.random() * 1000 };
  todos.push(todo);
  res.json(todo);
});

router.delete("/:id", (req, res) => {
  const idx = todos.findIndex((e) => e.id === +req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: "Todo does not exist" });
  }
  const todo = todos[idx];
  todos.splice(idx, 1);
  res.json(todo);
});

router.put("/:id", (req, res) => {
  const { title, text } = req.body;
  if (title.trim() === "" || text.trim() === "") {
    return res.status(406).json({ error: "Invalid data" });
  }

  const idx = todos.findIndex((e) => e.id === +req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: "Todo does not exist" });
  }

  const todo = todos[idx];
  for (const [k, v] of Object.entries(req.body)) {
    todo[k] = v;
  }

  res.json(todo);
});

module.exports = router;
