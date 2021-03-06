const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Тут надо вернуть всех
});

router.get("/:id", (req, res) => {
  // Тут надо вернуть одного по ИД
});

router.put("/:id", (req, res) => {
  // Тут надо найти одного по ид и обновить его
});

router.delete("/:id", (req, res) => {
  // Удаляем одного по ид
  // подсказка: удалять надо по индексу с помощью splice
});

module.exports = router;
