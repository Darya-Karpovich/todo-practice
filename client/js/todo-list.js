const todosListEl = document.getElementById("todos-list");
const btnAdd = document.getElementById("button-add");
const formEl = document.getElementById("form-todo");

getAllTodos().then((todos) => {
  for (const todo of todos) {
    appendTodo(todosListEl, todo);
  }
});

const paramsRes = new URL(window.location.href).searchParams.get("res");
if (paramsRes === "true") {
  showAlert("Todo was updated successfully");
} else if (paramsRes === "false") {
  showAlert("Something went wrong");
}

// form submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  const form = new FormData(e.target);
  postTodo({
    title: form.get("title"),
    text: form.get("text"),
  }).then((res) => {
    appendTodo(todosListEl, res);
  });
});
