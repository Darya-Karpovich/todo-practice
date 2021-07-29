const SERVER_URL = "http://localhost:3000";

function getAllTodos() {
  return fetch(SERVER_URL + "/todos").then((res) => res.json());
}

function deleteTodo(id) {
  return fetch(SERVER_URL + "/todos/" + id, {
    method: "DELETE",
  }).then((res) => res.json());
}

function postTodo(todo) {
  return fetch(SERVER_URL + "/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
}

function getTodo(id) {
  return fetch(SERVER_URL + "/todos/" + id).then((res) => res.json());
}

function updateTodo(id, todo) {
  return fetch(SERVER_URL + "/todos/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
}
