const todoForm = document.getElementById("todo-form");
const todoSearchList = document.getElementById("todo-search-list");

todoForm.onsubmit = (e) => {
  e.preventDefault();

  todoSearchList.innerHTML = "";

  const searchString = todoForm["search"].value;

  getAllTodos().then((res) => {
    const filteredTodos = res.filter(
      (todo) =>
        todo.title.includes(searchString) || todo.text.includes(searchString)
    );
    for (const todo of filteredTodos) {
      appendTodo(todoSearchList, todo);
    }
  });
};
