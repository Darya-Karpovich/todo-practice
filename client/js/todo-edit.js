const todoId = new URL(window.location.href).searchParams.get("id");

function redirectToErrorPage() {
  window.location.href = "404.html";
}

if (!todoId) {
  redirectToErrorPage();
}

const todoEditForm = document.getElementById("form-todo");
todoEditForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoFormData = new FormData(todoEditForm);

  updateTodo(todoId, {
    title: todoFormData.get("title"),
    text: todoFormData.get("text"),
  }).then((res) => {
    if (res.error) {
      return window.location = 'index.html?res=false';
    }
    window.location = 'index.html?res=true'
  });
});

getTodo(todoId).then((res) => {
  if (!res.error) {
    for (const [k, v] of Object.entries(res)) {
      todoEditForm[k].value = v;
    }
  }
});
// .catch(()=> redirectToErrorPage() )
