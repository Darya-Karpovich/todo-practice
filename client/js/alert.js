function showAlert(message) {
  const alert = document.createElement("div");
  alert.classList.add(
    "alert",
    "bg-primary",
    "position-fixed",
    "bottom-0",
    "left-0",
    "m-2",
    "text-light"
  );
  alert.innerHTML = message;
  alert.style.display = "block";

  document.body.append(alert);

  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}
