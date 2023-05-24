document.addEventListener("DOMContentLoaded", (e) => {
    const form = document.body.querySelector("form#create-task-form")
    form.addEventListener("submit",submitToDo);
});

function submitToDo(e) {
  e.preventDefault();
  const uList = document.body.querySelector("ul#tasks");
  const list = document.createElement("li");
  const input = document.querySelector("input#new-task-description").value;
  list.textContent = input;
  uList.appendChild(list);
}
