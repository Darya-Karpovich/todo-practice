const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const todos = Array(5)
  .fill(0)
  .map((_, i) => ({
    id: Date.now() + Math.floor(Math.random() * 1000),
    title: "Hello" + i,
    text: "world" + (i + 1),
  }));

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find(todo => todo.id === +req.params.id);
  console.log(todo)
  if (!todo){
    return res.json({error:'Todo not found'})
  }
  res.json(todo);
});

app.post("/todos", (req, res) => {
  const { title, text } = req.body;

  if (title.trim() === "" || text.trim() === "") {
    return res.json({ error: "Invalid data" });
  }

  const todo = { title, text, id: Date.now() + Math.random() * 1000 };
  todos.push(todo);
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const idx = todos.findIndex((e) => e.id === +req.params.id);
  if (idx === -1) {
    return res.json({ error: "Bad" });
  }
  const todo = todos[idx];
  todos.splice(idx, 1);
  res.json(todo);
});

app.put("/todos/:id", (req, res) => {
  const { title, text } = req.body;
  if (title.trim() === "" || text.trim() === "") {
    return res.json({ error: "Invalid data" });
  }
  const idx = todos.findIndex((e) => e.id === +req.params.id);
  if (idx === -1) {
    return res.json({ error: "Bad" });
  }
  const todo = todos[idx];

  for (const [k, v] of Object.entries(req.body)) {
    todo[k] = v;
  }

  res.json(todo);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
