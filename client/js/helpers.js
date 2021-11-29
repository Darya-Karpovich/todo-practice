function appendTodo(parent, { id, title, text }) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  const btnEdit = document.createElement("button");
  const p = document.createElement("p");

  p.textContent = text;

  div.className = "content";
  div.innerHTML = `<h4>${title}</h4>`;

  btnEdit.innerHTML = "&#x270E";
  btn.innerHTML = "&times;";

  btn.setAttribute("data-id", id);
  btnEdit.setAttribute("data-id", id);
  btn.addEventListener("click", (e) => {
    const todoId = e.target.getAttribute("data-id");
    deleteTodo(todoId).then((res) => {
      btn.removeEventListener("click", () => {});
      btn.closest("li").remove();
    });
  });

  span.append(btnEdit);
  span.append(btn);
  div.append(span);
  li.append(div);
  li.append(p);

  btnEdit.addEventListener("click", (e) => {
    window.location.href = "edit.html?id=" + e.target.getAttribute("data-id");
  });

  parent.append(li);
}
