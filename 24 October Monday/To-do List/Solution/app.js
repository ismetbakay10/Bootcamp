//document.querySelector('#push').onclick =

let todoList = [];

function todo() {
  let inputValue = document.querySelector("#newtask input").value;

  if (inputValue.length == 0) {
    alert("Please Enter a Task");
  } else {
    todoList.push(inputValue);
    todoList.sort();

    renderTaskList();
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();

        todoList.slice(i, 1);
      };
    }
  }
}
document.querySelector("#push").addEventListener("click", todo);

function renderTaskList() {
  let taskListContainer = document.querySelector("#tasks");
  taskListContainer.innerHTML = " ";
  for (let index = 0; index < todoList.length; index++) {
    taskListContainer.innerHTML += `

  <li class="task">
  <span id="taskname">
      ${todoList[index]}
  </span>
  <button class="delete">
  <i class="gg-trash"></i>
  </button>
</li>
  `;
  }
}
