const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  // Тут логика авторизации юзера
});

router.post("/register", (req, res) => {
  // Тут создание пользователя и добавление его к остальным
});

module.exports = router;
